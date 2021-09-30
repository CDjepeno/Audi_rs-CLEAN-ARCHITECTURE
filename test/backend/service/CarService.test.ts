import dotenv from "dotenv";
import {connectDb} from "../../../src/backend/database/mongodb";
import UserModel from "../../../src/backend/models/userModel";
// @ts-ignore
import {CarRepositoryBuilder} from "../../builder/CarRepositoryBuilder";
import {CarService} from "../../../src/backend/services/carService";

jest.setTimeout(60000)
describe('Test CarService', () => {
        let mongoClient;
        let id;
    beforeAll(async () => {
        dotenv.config({ path: 'src/backend/config/.test.env' })
        mongoClient = await connectDb(process.env.MONGO_URI_TEST)
        const newUser = await UserModel.create(CarRepositoryBuilder.carStub());
        id = newUser._id;
    })
    it('Create Car test should be return "Véhicule ajouté"', async() => {
        const car = CarRepositoryBuilder.carStub()
        const carService = new CarService()
        const result = await carService.addCar(car)

        expect(result).toBe('Véhicule ajouté')
    })

    it.only('Get a Car test should be return "Véhicule ajouté"', async() => {
        const car = CarRepositoryBuilder.carStub()
        const carService = new CarService()
        const result = await carService.addCar(car)

        expect(result).toBe('Véhicule ajouté')
    })
})