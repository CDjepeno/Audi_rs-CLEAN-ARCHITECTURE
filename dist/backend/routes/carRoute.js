"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CarController_1 = require("../controllers/car/CarController");
const auth_1 = require("../controllers/auth/auth");
const CarRoutes = express_1.default.Router();
CarRoutes.post("/api/car", auth_1.auth, CarController_1.createCar);
CarRoutes.delete("/api/car/:id", auth_1.auth, CarController_1.deleteCar);
CarRoutes.get("/api/car/:id", CarController_1.getCar);
CarRoutes.get("/api/cars", CarController_1.getCars);
exports.default = CarRoutes;
