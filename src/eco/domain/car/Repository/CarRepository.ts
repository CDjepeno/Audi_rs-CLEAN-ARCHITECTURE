import {Car} from "../Entities/Car";

export interface CarRepository {
    getAll(): Promise<Car[]>

    addCar(car: Car): Promise<void>

    deleteCar(id: string): Promise<void>

    getCar(id: string): Promise<Car>
}