"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CarController_1 = require("../controllers/car/CarController");
const auth_1 = require("../controllers/auth/auth");
const CarRoutes = express_1.default.Router();
const carController = new CarController_1.CarController();
CarRoutes.post("/api/car", auth_1.auth, carController.createCar);
CarRoutes.get("/api/car/:id", carController.getCar);
CarRoutes.delete("/api/car/:id", auth_1.auth, carController.deleteCar);
CarRoutes.get("/api/cars", carController.getCars);
exports.default = CarRoutes;
