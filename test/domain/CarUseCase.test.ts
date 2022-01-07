// @ts-ignore
import {InMemoryCarRepository} from "../builder/InMemoryCarRepository";
// @ts-ignore
import {CarRepositoryBuilder} from "../builder/CarRepositoryBuilder";
import {BuilderCarInMemory} from "../builder/BuilderCarInMemory";

jest.setTimeout(60000)
describe('InMemoryCarRepository Test', () => {
    it('Should register a new car', () => {
        const car = BuilderCarInMemory.carStub()
        const carStub = new InMemoryCarRepository()
        const result = carStub.addCar(car)
        expect(result).resolves.toEqual('Véhicule ajouté')
    })
    it('Should get a car', () => {
        const car = BuilderCarInMemory.carStub()
        const carStub = new InMemoryCarRepository()
        carStub.addCar(car)
        const result = carStub.getCar(car.id)
        expect(result).resolves.toEqual(car)
    })
    it('Should get all cars', () => {
        const carStub = new InMemoryCarRepository()
        const cars = BuilderCarInMemory.carsStub()
        carStub.addCars(cars)
        const result = carStub.getCars()
        expect(result).resolves.toEqual(cars)
    })
    it('Should delete car ', () => {
        const carStub = new InMemoryCarRepository()
        const car = BuilderCarInMemory.carStub()
        carStub.addCar(car)
        const result = carStub.deleteCar(car.id)
        expect(result).resolves.toEqual('Véhicule supprimé')
    })
})