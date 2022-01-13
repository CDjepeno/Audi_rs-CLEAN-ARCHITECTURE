import { ValidationError } from "class-validator";
import {Car, ICar} from "../Entities/Car";

export interface ICarRepository {
    addCar(car: ICar): Promise<string|ValidationError[]>
    getCars(): Promise<any>
    deleteCar(id: string): Promise<any>
    getCar(id: string): Promise<ICar>
}