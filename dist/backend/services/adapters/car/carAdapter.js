"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarsInteractor = exports.deleteCarInteractor = exports.getCarInteractor = exports.addCarInteractor = void 0;
const carService_1 = require("../../carService");
const AddCar_1 = require("../../../../Core domain/car-store/application/UseCase/car/AddCar/AddCar");
const GetCar_1 = require("../../../../Core domain/car-store/application/UseCase/car/GetCar/GetCar");
const DeleteCar_1 = require("../../../../Core domain/car-store/application/UseCase/car/DeleteCar/DeleteCar");
const GetCars_1 = require("../../../../Core domain/car-store/application/UseCase/car/GetCars/GetCars");
const carRepository = new carService_1.CarService();
const addCarInteractor = new AddCar_1.AddCar(carRepository);
exports.addCarInteractor = addCarInteractor;
const getCarInteractor = new GetCar_1.GetCar(carRepository);
exports.getCarInteractor = getCarInteractor;
const deleteCarInteractor = new DeleteCar_1.DeleteCar(carRepository);
exports.deleteCarInteractor = deleteCarInteractor;
const getCarsInteractor = new GetCars_1.GetCars(carRepository);
exports.getCarsInteractor = getCarsInteractor;