import { GetCars } from "./../../../../../Core domain/car-store/application/UseCase/car/GetCars/GetCars";
import { AddCar } from "../../../../../Core domain/car-store/application/UseCase/car/AddCar/AddCar";
import { CarProvider } from "../../carService";
import { GetCar } from "../../../../../Core domain/car-store/application/UseCase/car/GetCar/GetCar";
import { DeleteCar } from "../../../../../Core domain/car-store/application/UseCase/car/DeleteCar/DeleteCar";

const carRepository = new CarProvider();

const addCarInteractor = new AddCar(carRepository);
const getCarsInteractor = new GetCars(carRepository);
const getCarInteractor = new GetCar(carRepository);
const deleteCarInteractor = new DeleteCar(carRepository);

export {
  addCarInteractor,
  getCarInteractor,
  getCarsInteractor,
  deleteCarInteractor,
};
