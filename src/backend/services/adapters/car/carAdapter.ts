import { CarService } from "../../carService";
import {AddCar} from "../../../../Core domain/car-store/application/UseCase/car/AddCar/AddCar";
import {GetCar} from "../../../../Core domain/car-store/application/UseCase/car/GetCar/GetCar";
import {DeleteCar} from "../../../../Core domain/car-store/application/UseCase/car/DeleteCar/DeleteCar";
import {GetCars} from "../../../../Core domain/car-store/application/UseCase/car/GetCars/GetCars";

const carRepository = new CarService()

const addCarInteractor = new AddCar(carRepository)
const getCarInteractor = new GetCar(carRepository)
const deleteCarInteractor = new DeleteCar(carRepository)
const getCarsInteractor = new GetCars(carRepository)

export { addCarInteractor, getCarInteractor, deleteCarInteractor, getCarsInteractor }