import express from "express";
import { getAllObras, getObrasById } from "../controllers/obrasControllers.js";

const router = express.Router();

router.get("/", getAllObras);
router.get("/:id", getObrasById);

export default router;
