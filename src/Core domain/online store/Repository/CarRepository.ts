import {ICar} from "../Entities/VO/Car";

export interface CarRepository {
    getCars(): Promise<ICar[]>

    addCar(car: ICar): Promise<"Véhicule ajouté">

    deleteCar(id: string): Promise<"Véhicule supprimé">

    getCar(id: string): Promise<ICar>
}