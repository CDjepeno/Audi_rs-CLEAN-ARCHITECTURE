import express from 'express'
import {createCar, deleteCar, getCar, getCars} from "../controllers/car/CarController";
import {auth} from "../controllers/auth/auth";

const CarRoutes = express.Router();

CarRoutes.post("/api/car", auth, createCar)
CarRoutes.delete("/api/car/:id", auth, deleteCar)
CarRoutes.get("/api/car/:id", getCar)
CarRoutes.get("/api/cars", getCars)

export default CarRoutes