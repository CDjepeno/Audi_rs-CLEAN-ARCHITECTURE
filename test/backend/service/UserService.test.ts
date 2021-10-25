// @ts-ignore
import {UserRepositoryBuilder, UserType} from "../../builder/UserRepositoryBuilder";
import { UserService } from "../../../src/server_Express/services/userService";
import {connectDb} from "../../../src/server_Express/database/mongodb";
import dotenv from 'dotenv'
import UserModel from "../../../src/server_Express/models/userModel";
import util from 'util'
new util.TextEncoder()


jest.setTimeout(60000)
describe('Test UserService module', () => {
    let mongoClient;
    let id;
    beforeAll(async () => {
        dotenv.config({ path: 'src/server_Express/config/.test.env' })
        mongoClient = await connectDb(process.env.MONGO_URI_TEST)

        await UserModel.insertMany(UserRepositoryBuilder.usersStub()).then(newUsers => {
            id = newUsers[0]._id;
        }).then()
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