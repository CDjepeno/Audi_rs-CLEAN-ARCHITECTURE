import { ValidationError } from "class-validator";
import {ICar} from "../Entities/Car";

export interface ICarRepository {
    addCar(car: ICar): Promise<string|ValidationError[]>
    getCars(): Promise<ICar[]>
    deleteCar(id: string): Promise<any>
    getCar(id: string): Promise<ICar>
}