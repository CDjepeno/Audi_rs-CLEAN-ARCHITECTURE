import { GetCars } from './../../../../../Core domain/car-store/application/UseCase/car/GetCars/GetCars';
import { AddCar } from "../../../../../Core domain/car-store/application/UseCase/car/AddCar/AddCar";
import { CarProvider } from "../../carService";


const carRepository = new CarProvider()

const addCarInteractor = new AddCar(carRepository);
const getCarsInteractor = new GetCars(carRepository);