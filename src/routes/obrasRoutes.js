import express from "express";
import {
  getAllObras,
  getObrasById,
  createObra,
  deleteObra,
} from "../controllers/obrasControllers.js";

const router = express.Router();

router.get("/", getAllObras);
router.get("/:id", getObrasById);
router.post("/", createObra);
router.delete("/:id", deleteObra);

export default router;
