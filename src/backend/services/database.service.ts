import * as mongoDB from 'mongodb'
import config from "../config/config";
import {MongoClient} from "mongodb";

export async function connectToDatabase() {
    const client: mongoDB.MongoClient = new MongoClient(config.DB.uri)

    await client.connect()

    const db: mongoDB.Db = client.db(config.DB.name)

    console.log(`Successfully connected to database: ${db.databaseName}`)
}