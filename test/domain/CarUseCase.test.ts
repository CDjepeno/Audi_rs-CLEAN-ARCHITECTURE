// @ts-ignore
import {InMemoryCarRepository} from "../builder/InMemoryCarRepository";
// @ts-ignore
import {CarRepositoryBuilder} from "../builder/CarRepositoryBuilder";

describe('InMemoryCarRepository Test', () => {
    it('Should register a new car', () => {
        const car = CarRepositoryBuilder.carStub()
        const carStub = new InMemoryCarRepository()
        const result = carStub.addCar(car)
        expect(result).resolves.toEqual('Véhicule ajouté')
    })
    it('Should get a car', () => {
        const car = CarRepositoryBuilder.carStub()
        const carStub = new InMemoryCarRepository()
        const result = carStub.getCar(car)
        expect(result).resolves.toEqual(car)
    })
    it('Should get all cars', () => {
        const carStub = new InMemoryCarRepository()
        const cars = CarRepositoryBuilder.carStub()
        const result = carStub.getCars()
        expect(result).resolves.toEqual(cars)
    })
    it('Should delete car ', () => {
        const car = CarRepositoryBuilder.carStub()
        const carStub = new InMemoryCarRepository()
        const carAdd = carStub.addCar(car)
        const result = carStub.deleteCar(car)
        expect(result).resolves.toEqual('Véhicule supprimé')
    })
})