import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

class WorksController {
  
  async createWorks(req, res) {
    try {
      const { title, description, category } = req.body;
      const files = req.files;

      const id = `works-${nanoid(8)}`;
      const newWorks = await prisma.work.create({
        data: {
          id: id,
          title: title,
          imageUrl: files[0].path,
          description: description,
          category: category,
          author: 'Admin',
        },
      });
      return res.status(200).json({
        status: true,
        message: "Karya berhasil dibuat",
        data: newWorks,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Gagal membuat karya",
      });
    }
  }

  async getAllWorks(req, res) {
    try {
      const works = await prisma.work.findMany();
      return res.status(200).json({
        status: true,
        message: "Karya berhasil diambil",
        data: works,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Gagal mengambil karya",
      });
    }
  }

  async getWorksById(req, res) {
    try {
      const { id } = req.params;
      const work = await prisma.work.findUnique({ where: { id } });
      return res.status(200).json({
        status: true,
        message: "Karya berhasil diambil",
        data: work,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Gagal mengambil karya",
      });
    }
  }

  async updateWorksById(req, res) {
    try {
      const { id } = req.params;
      const { title, imageUrl, description, category, author } = req.body;
      const updatedWorks = await prisma.work.update({
        where: { id },
        data: { title, imageUrl, description, category, author },
      });
      return res.status(200).json({
      status: true,
        message: "Karya berhasil diubah",
        data: updatedWorks,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Gagal mengubah karya",
      });
    }
  }

  async deleteWorksById(req, res) {
    try {
      const { id } = req.params;
      await prisma.work.delete({ where: { id } });
      return res.status(200).json({
        status: true,
        message: "Karya berhasil dihapus",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Gagal menghapus karya",
      });
    }
  }
}

export default new WorksController();
