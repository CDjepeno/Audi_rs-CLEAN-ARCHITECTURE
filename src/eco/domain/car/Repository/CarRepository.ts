import {Car} from "../Entities/Car";

export interface CarRepository {
    getAll(): Promise<Car[]>

    addCar(car: Car): Promise<void>

    deleteCar(car: Car): Promise<void>

    getCar(id: string): Promise<Car>
}