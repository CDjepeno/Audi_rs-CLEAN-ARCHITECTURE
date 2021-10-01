import CarModel from "../../../backend/models/carModel";
import {ICar} from "../Entities/VO/Car";

export interface ICarRepository {
    // @ts-ignore
    getCars(): Promise<CarModel[]>

    addCar(car: ICar): Promise<"Véhicule ajouté">

    deleteCar(id: string): Promise<"Véhicule supprimé">

    // @ts-ignore
    getCar(id: string): Promise<CarModel>
}