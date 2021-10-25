import express from 'express'
import { CarController } from "../controllers/car/CarController";
import {auth} from "../controllers/auth/auth";

const CarRoutes = express.Router();

const carController = new CarController()

CarRoutes.post("/api/car", auth, carController.createCar)
CarRoutes.get("/api/car/:id", carController.getCar)
CarRoutes.delete("/api/car/:id", auth, carController.deleteCar)
CarRoutes.get("/api/cars", carController.getCars)

export default CarRoutes