// @ts-ignore
import {UserRepositoryBuilder} from "../../builder/UserRepositoryBuilder";
import request from 'supertest'
import app from "../../../src/backend/app";
import { UserService } from "../../../src/backend/services/userService";
import {connectDb} from "../../../src/backend/database/mongodb";
import dotenv from 'dotenv'

dotenv.config()

describe('Test UserService module', () => {
    let mongoClient;
    // beforeAll(async () => {
    //     console.log(process.env.MONGO_URI)
    //     mongoClient = await connectDb(process.env.MONGO_URI_TEST)
    // })
    it('createUser Test', async() => {
        const user = UserRepositoryBuilder.userStub()
        const userService = new UserService()
        const result = await userService.addUser(user)

        expect(result).toBe('Utilisateur ajouté')
    })
})