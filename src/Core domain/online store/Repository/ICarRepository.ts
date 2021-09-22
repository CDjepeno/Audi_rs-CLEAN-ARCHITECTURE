import {ICar} from "../Entities/VO/Car";

export interface ICarRepository {
    getCars(): Promise<ICar[]>

    addCar(car: ICar): Promise<"Véhicule ajouté">

    deleteCar(id: string): Promise<"Véhicule supprimé">

    getCar(id: string): Promise<ICar>
}