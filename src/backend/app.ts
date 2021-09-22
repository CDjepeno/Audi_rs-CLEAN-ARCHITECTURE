import express from 'express'
import config  from './config/config'
import mongoose from "mongoose";
import router from "./routes/userRoute";

(async () => {
    const app: express.Application = express()

    app
        .use(express.json())
        .use(express.urlencoded({ extended: false }))
        .use(router)

    app.listen(config.server.port, () => console.log(`Serveur running ${config.server.port}`))

    app.get('/', (req , res) => {
        res.send('hello world')
    })

    await mongoose.connect(config.DB.uri,() => {
        console.log('connected to database')
    })





})()
