import {CarRepository} from "../../src/Core domain/online store/Repository/CarRepository";
import {Car} from "../../src/Core domain/online store/Entities/VO/Car";
// @ts-ignore
import {CarRepositoryBuilder} from "./CarRepositoryBuilder";

export class InMemoryCarRepository implements CarRepository{
    private cars: Car[] = []

    async getCars():Promise<Car[]> {
        const result = CarRepositoryBuilder.carsStub()
        return Promise.resolve(result)
    }

    async getCar(car: Car): Promise<Car> {
        if(this.exist(car)) {
            return Promise.resolve(car)
        }
    }

     async addCar(car: Car): Promise<"Véhicule ajouté"> {
        let index = this.cars.indexOf(car);
        if(this.cars.includes(car)) {
            this.cars.splice(index, 1);
        }
        this.cars.push(car)
        return Promise.resolve('Véhicule ajouté')
    }

    async deleteCar(car: Car): Promise<"Véhicule supprimé"> {
        if(!this.exist(car)) {
            return Promise.resolve("Véhicule supprimé")
        }
    }

    exist(car: Car): boolean {
        this.cars.push(car)
        for (let c of this.cars) {
            if(this.cars.includes(c)) {
                return true
            }
        }
        return false
    }

}
