import {Car} from "../../src/eco/domain/car/Entities/Car";

export class CarRepositoryBuilder {
    private addCar: (car: Car) => Promise<void> = () => Promise.resolve();
}