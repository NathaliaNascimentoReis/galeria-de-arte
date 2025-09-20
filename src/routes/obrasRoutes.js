import express from "express";
import {
  getAllObras,
  getObrasById,
  createObra,
} from "../controllers/obrasControllers.js";

const router = express.Router();

router.get("/", getAllObras);
router.get("/:id", getObrasById);
router.post("/", createObra);

export default router;
