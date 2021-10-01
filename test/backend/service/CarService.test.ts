import dotenv from "dotenv";
import {connectDb} from "../../../src/backend/database/mongodb";
// @ts-ignore
import {CarRepositoryBuilder} from "../../builder/CarRepositoryBuilder";
import {CarService} from "../../../src/backend/services/carService";
import CarModel from "../../../src/backend/models/carModel";

jest.setTimeout(60000)
describe('Test CarService', () => {
        let mongoClient;
        let id;
    beforeAll(async () => {
        dotenv.config({ path: 'src/backend/config/.test.env' })
        mongoClient = await connectDb(process.env.MONGO_URI_TEST)
        const newUser = await CarModel.create(CarRepositoryBuilder.carStub());
        id = newUser._id;
    })
    it.only('Create Car test should be return "Véhicule ajouté"', async() => {
        const car = CarRepositoryBuilder.carStub()
        const carService = new CarService()
        const result = await carService.addCar(car)

        expect(result).toBe('Véhicule ajouté')
    })
    it('Get a Cars test should be return array of car', async() => {
        const carService = new CarService()
        return await carService.getCars().then(res => {
            expect.arrayContaining([expect.objectContaining(res)])
        })
    })
    it('Get a Cars test should be return a car', async() => {
        const carService = new CarService()
        const result = await carService.getCar(id)
        expect(result).toBeDefined()
    })
})