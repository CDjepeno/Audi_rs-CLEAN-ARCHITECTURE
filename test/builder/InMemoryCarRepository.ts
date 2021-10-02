import {ICarRepository} from "../../src/Core domain/online store/Repository/ICarRepository";
import {ICar} from "../../src/Core domain/online store/Entities/VO/Car";
// @ts-ignore
import {CarRepositoryBuilder} from "./CarRepositoryBuilder";
// @ts-ignore
import {BuilderCarInMemory} from "./BuilderCarInMemory";

export class InMemoryCarRepository implements ICarRepository{
    private cars: Map<string, ICar>

    constructor() {
        this.cars = new Map()
    }

    async addCar(car: ICar): Promise<"Véhicule ajouté"> {
        if(this.cars.get(car.id)) {
            this.cars.delete(car.id);
        }
        this.cars.set(car.id,car)
        return Promise.resolve('Véhicule ajouté')
    }

    addCars(carsTab: ICar[]) {
        for(let car of carsTab) {
            return  this.cars.set(car.id ,car)
        }
        return this.cars
    }

    async getCars():Promise<ICar[]> {
        const result = BuilderCarInMemory.carsStub()
        return Promise.resolve(result)
    }

    async getCar(id: string): Promise<ICar>{
        return Promise.resolve(this.cars.get(id))
    }

    async deleteCar(id: string): Promise<"Véhicule supprimé"> {
            return Promise.resolve("Véhicule supprimé")
    }
}
