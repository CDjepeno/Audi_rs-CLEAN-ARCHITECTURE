import express from 'express'
import {createCar, deleteCar, getCar, getCars} from "../controllers/CarController";

const CarRoutes = express.Router();

CarRoutes.post("/api/car", createCar)
CarRoutes.delete("/api/car/:id", deleteCar)
CarRoutes.get("/api/car/:id", getCar)
CarRoutes.get("/api/cars", getCars)

export default CarRoutes