import express from "express";
import { uploadFiles } from "../middlewares/UploadFile.js";
import WorksController from "../controller/WorksController.js";

const router = express.Router();

router.post("/works", uploadFiles, WorksController.createWorks);
router.get("/works", WorksController.getAllWorks);
router.get("/works/:worksId", WorksController.getWorksById);
router.put("/works/:worksId", uploadFiles, WorksController.updateWorksById);
router.delete("/works/:id", WorksController.deleteWorksById);

export default router;

