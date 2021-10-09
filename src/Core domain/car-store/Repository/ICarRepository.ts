import CarModel from "../../../backend/models/carModel";
import {ICar} from "../Entities/Car";
import {DeleteCarRequest} from "../application/UseCase/car/DeleteCar/DeleteCarRequest";

export interface ICarRepository {
    // @ts-ignore
    getCars(): Promise<CarModel[]>

    addCar(car: ICar): Promise<string>

    deleteCar(id: string): Promise<any>

    // @ts-ignore
    getCar(id: string): Promise<CarModel>
}