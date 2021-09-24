// @ts-ignore
import {UserRepositoryBuilder} from "../../builder/UserRepositoryBuilder";
import { UserService } from "../../../src/backend/services/userService";
import {connectDb} from "../../../src/backend/database/mongodb";
import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config()

jest.setTimeout(60000)
describe('Test UserService module', () => {
    let mongoClient;
    beforeAll(async () => {
        mongoClient = await connectDb(process.env.MONGO_URI_TEST)
    })
    it('createUser Test', async() => {

        const user = UserRepositoryBuilder.userStub()
        const userService = new UserService()
        const result = await userService.addUser(user)

        expect(result).toBe('Utilisateur ajouté')
    })
    // afterAll(async() => await mongoose.connection.db.dropCollection("users"))
})