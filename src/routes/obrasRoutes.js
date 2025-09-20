import express from "express";
import { getAllObras } from "../controllers/obrasControllers.js";

const router = express.Router();

router.get("/", getAllObras);

export default router;
