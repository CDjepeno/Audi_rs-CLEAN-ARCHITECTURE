// @ts-ignore
import {UserRepositoryBuilder, UserType} from "../../builder/UserRepositoryBuilder";
import { UserService } from "../../../src/backend/services/userService";
import {connectDb} from "../../../src/backend/database/mongodb";
import dotenv from 'dotenv'
import UserModel from "../../../src/backend/models/userModel";
import util from 'util'
new util.TextEncoder()


jest.setTimeout(60000)
describe('Test UserService module', () => {
    let mongoClient;
    let id;
    beforeAll(async () => {
        dotenv.config({ path: 'src/backend/config/.test.env' })
        mongoClient = await connectDb(process.env.MONGO_URI_TEST)
        const newUser = await UserModel.create(UserRepositoryBuilder.userStub());
        id = newUser._id;
    })

    it('createUser Test should be return "Utilisateur ajouté"', async() => {
        const user = UserRepositoryBuilder.userStub()
        const userService = new UserService()
        const result = await userService.addUser(user)

        expect(result).toBe('Utilisateur ajouté')
    })

    it('getUser Test should be defined', async() => {
        const userService = new UserService()
        const result = await userService.getUser(id)
        expect(result.id).toBeDefined()
    })

    it('getUsers Test should be return a array', async() => {
        const userService = new UserService()
        await userService.getUsers().then(res => {
            expect.arrayContaining([expect.objectContaining(res)])
        })
    })

    it('deleteUser Test', async() => {
        const userService = new UserService()
        const response = await userService.userDelete(id)
        expect(response).toBe('Utilisateur supprimé')
    })


    // afterAll(async() => await mongoose.connection.db.dropCollection("users"))
})