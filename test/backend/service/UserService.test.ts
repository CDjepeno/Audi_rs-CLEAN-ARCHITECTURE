// @ts-ignore
import {UserRepositoryBuilder} from "../../builder/UserRepositoryBuilder";
import { UserService } from "../../../src/backend/services/userService";
import {connectDb} from "../../../src/backend/database/mongodb";
import dotenv from 'dotenv'
import UserModel from "../../../src/backend/models/userModel";
import {User} from "../../../src/Core domain/online store/Entities/VO/User";
import util from 'util'

new util.TextEncoder()

dotenv.config()

jest.setTimeout(60000)
describe('Test UserService module', () => {
    let mongoClient;
    let id;
    beforeAll(async () => {
        mongoClient = await connectDb(process.env.MONGO_URI)
        const newUser = await UserModel.create(UserRepositoryBuilder.userStub());

        id = newUser._id;
    })

    it('createUser Test', async() => {
        const user = UserRepositoryBuilder.userStub()
        const userService = new UserService()
        const result = await userService.addUser(user)

        expect(result).toBe('Utilisateur ajouté')
    })

    it.only('getUser Test', async() => {
        const userService = new UserService()
        const result = await userService.getUser(id)
        console.log(result)

        expect(result).toBeInstanceOf(User)
    })
    // afterAll(async() => await mongoose.connection.db.dropCollection("users"))
})