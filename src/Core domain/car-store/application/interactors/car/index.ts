import { CarService } from "../../../../../backend/services/carService";
import {AddCar} from "../../UseCase/car/AddCar/AddCar";
import {GetCar} from "../../UseCase/car/GetCar/GetCar";
import {DeleteCar} from "../../UseCase/car/DeleteCar/DeleteCar";


const carRepository = new CarService()

const addCarInteractor = new AddCar(carRepository)
const getCarInteractor = new GetCar(carRepository)
const deleteCarInteractor = new DeleteCar(carRepository)

export { addCarInteractor, getCarInteractor, deleteCarInteractor }