import express from 'express'
import config  from './config/config'
import mongoose from "mongoose";

(async () => {
    await mongoose.connect(config.DB.uri,() => {
        console.log('connected to database')
    })

    const app: express.Application = express()

    app.use(express.json())


    app.get('/', (req , res) => {
        res.send('hello world')
    })

    app.listen(config.server.port, () => console.log(`Serveur running ${config.server.port}`))
})()
