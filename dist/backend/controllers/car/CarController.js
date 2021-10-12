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
exports.CarController = void 0;
const carService_1 = require("../../services/carService");
const carAdapter_1 = require("../../services/adapters/car/carAdapter");
class CarController {
    createCar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const car = req.body;
                yield carAdapter_1.addCarInteractor.execute(car);
                res.json('Véhicule ajouté');
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    deleteCar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const carService = new carService_1.CarService();
                yield carAdapter_1.deleteCarInteractor.execute(req.params.id);
                yield carService.deleteCar(req.params.id);
                res.json('Véhicule supprimé');
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getCar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield carAdapter_1.getCarInteractor.execute(req.params.id);
                res.json(user);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getCars(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cars = yield carAdapter_1.getCarsInteractor.execute();
                res.json(cars);
                return cars;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.CarController = CarController;
