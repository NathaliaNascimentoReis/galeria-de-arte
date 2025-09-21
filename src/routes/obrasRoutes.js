import express from "express";
import {
  getAllObras,
  getObrasById,
  createObra,
  deleteObra,
  updateObra
} from "../controllers/obrasControllers.js";

const router = express.Router();

router.get("/", getAllObras);
router.get("/:id", getObrasById);
router.post("/", createObra);
router.delete("/:id", deleteObra);
router.put("/:id", updateObra);

export default router;
