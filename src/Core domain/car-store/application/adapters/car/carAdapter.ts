import { CarService } from "../../../../../backend/services/carService";
import {AddCar} from "../../UseCase/car/AddCar/AddCar";
import {GetCar} from "../../UseCase/car/GetCar/GetCar";
import {DeleteCar} from "../../UseCase/car/DeleteCar/DeleteCar";
import {GetCars} from "../../UseCase/car/GetCars/GetCars";

const carRepository = new CarService()

const addCarInteractor = new AddCar(carRepository)
const getCarInteractor = new GetCar(carRepository)
const deleteCarInteractor = new DeleteCar(carRepository)
const getCarsInteractor = new GetCars(carRepository)

export { addCarInteractor, getCarInteractor, deleteCarInteractor, getCarsInteractor }