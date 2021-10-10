import {ICar} from "../Entities/Car";

export interface ICarRepository {
    // @ts-ignore
    getCars(): Promise<ICar[]>
    addCar(car: ICar): Promise<string>
    deleteCar(id: string): Promise<any>
    // @ts-ignore
    getCar(id: string): Promise<ICar>
}