import {Car} from "../Entities/VO/Car";

export interface CarRepository {
    getCars(): Promise<Car[]>

    addCar(car: Car): Promise<"Véhicule ajouté">

    deleteCar(car: Car): Promise<"Véhicule supprimé">

    getCar(car: Car): Promise<Car>
}