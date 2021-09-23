import mongoose, { connect } from 'mongoose'
import {connectDb} from "../../src/backend/database/mongodb";


describe('Mongodb Service', () => {
    let mongoClient;

    beforeAll(async () => {
        mongoClient = await connectDb(process.env.MONGO_URI_TEST)
    })

    // it("create user", async() => {
    //     await
    // })

    afterEach(async () => {
        await mongoClient.connection.db.dropDatabase()
    })

    afterAll(async () => {
        await mongoClient.connection.close()
    })
})