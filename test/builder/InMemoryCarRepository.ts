import {CarRepository} from "../../src/eco/Core domain/online store/Repository/CarRepository";
import {Car} from "../../src/eco/Core domain/online store/Entities/VO/Car";
// @ts-ignore
import {CarRepositoryBuilder} from "./CarRepositoryBuilder";

export class InMemoryCarRepository implements CarRepository{
    private cars: Map<string,Car>

    constructor() {
        this.cars = new Map()
    }

    async getCars(): Promise<Car[] | Promise<'Done'> > {
        this.addCars(CarRepositoryBuilder.carsStub())
        console.log(this.cars)
        return Promise.resolve('Done')
    }

    private addCars(car: Car[]): void {
        for (let c of car) {
            this.cars.set(c.id, c)
        }
    }

    async getCar(car: Car): Promise<Car> {
        return Promise.resolve(this.cars.get(car.id))
    }

     addCar(car: Car): Promise<"Véhicule ajouté"> {
        const exists = this.cars.get(car.id)
        if(exists) {
            this.cars.delete(car.id)
        }
        this.cars.set(car.id, car)
        return Promise.resolve('Véhicule ajouté')
    }

    async deleteCar(car: Car): Promise<"Véhicule supprimé"> {
        this.cars.delete(car.id)
        return Promise.resolve("Véhicule supprimé")
    }



}
