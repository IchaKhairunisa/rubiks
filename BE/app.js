import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { resolve } from "path";
import multer from "multer";
import cors from "cors";
import { uploadFiles } from "./middlewares/UploadFile.js";
import indexRouter from "./routes/index.js";

dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/public/images", express.static("public/images"));

app.post("/upload", (req, res) => {
  uploadFiles(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError && err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ error: "MAX_SIZE_FILE_IS_10_MB" });
      }
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ message: "Files uploaded successfully", files: req.files });
  });
});


app.use(express.static(resolve("public")));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      err.message = "MAX_SIZE_FILE_IS_10_MB";
    }
  }
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.use("/", indexRouter);

app.listen(process.env.APP_PORT, async () => {
  try {
    // MELAKUKAN KONEKSI KE DATABASE
    await prisma.$connect();
    console.log("CONNECTED TO DATABASE");

    process.on("SIGINT", async () => {
      await prisma.$disconnect();
      console.log("DISCONNECTED FROM DATABASE");
      process.exit();
    });
  } catch (error) {
    console.error("ERROR CONNECTING TO THE DATABASE:", error);
  }

  console.log(`SERVER_RUNNING_ON_PORT ${process.env.APP_PORT}`);
});