import { CarService } from "../../../../../backend/services/carService";
import {AddCar} from "../../UseCase/car/AddCar/AddCar";


const carRepository = new CarService()

const addCarInteractor = new AddCar(carRepository)

export { addCarInteractor }