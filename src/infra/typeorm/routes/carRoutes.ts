import { Router } from "express";
import { CarController } from "../controllers/CarController";

const carRoutes = Router();

carRoutes.post("/api/car", CarController.save);

export default carRoutes;
