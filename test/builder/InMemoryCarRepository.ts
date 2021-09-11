import {CarRepository} from "../../src/eco/domain/car/Repository/CarRepository";
import {Car} from "../../src/eco/domain/car/Entities/Car";

export class InMemoryCarRepository implements CarRepository{
    cars: Car[] = []
    constructor(cars: Car[]) {
        this.cars = cars
    }

    async getAll(): Promise<Car[]> {
        return this.cars
    }

    async getCar(id: string) {
        let c: Car
        for(c of this.cars) {
            if(c.id === id) {
                return c
            }
        }
    }

    async addCar(car: Car) {
        const exists = await this.exists(car.id)
        if(!exists) {
            this.cars.push(car)
        }
    }

    async deleteCar(car: Car) {
        let index = this.cars.indexOf(car);
        this.cars.splice(index,1)
    }

    async exists (id: string): Promise<boolean> {
        if(await this.getCar(id) === null) {
            return false
        }
        return true
    }
}