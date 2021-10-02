"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCars = exports.getCar = exports.deleteCar = exports.createCar = void 0;
const carService_1 = require("../services/carService");
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carService = new carService_1.CarService();
        const car = req.body;
        yield carService.addCar(car);
        res.json('Véhicule ajouté');
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.createCar = createCar;
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carService = new carService_1.CarService();
        yield carService.deleteCar(req.params.id);
        res.json('Véhicule supprimé');
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.deleteCar = deleteCar;
const getCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carService = new carService_1.CarService();
        const user = yield carService.getCar(req.params.id);
        res.json(user);
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.getCar = getCar;
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carService = new carService_1.CarService();
        const cars = yield carService.getCars();
        res.json(cars);
        return cars;
    }
    catch (e) {
        throw new Error(e);
    }
});
exports.getCars = getCars;
