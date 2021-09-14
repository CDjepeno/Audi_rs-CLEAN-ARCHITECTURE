import {CarRepository} from "../../src/eco/domain/car/Repository/CarRepository";
import {Car} from "../../src/eco/domain/car/Entities/Car";

export class InMemoryCarRepository implements CarRepository{
    private cars: Map<string,Car>

    constructor() {
        this.cars = new Map()
    }

    getAll(): Promise<Car[]> {
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

    async addCar(car: Car): Promise<'SAVE DONE'> {
        const exists = this.cars.get(car.id)
        if(exists) {
            this.cars.delete(car.id)
        }
        this.cars.set(car.id, car)
        return Promise.resolve('SAVE DONE')
    }

    async deleteCar(id: string) {
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
