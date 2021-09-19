import express from 'express'
import config  from './config/config'
import mongoose from "mongoose";

(async () => {
    const app: express.Application = express()
    app.listen(config.server.port, () => console.log(`Serveur running ${config.server.port}`))

    app.get('/', (req , res) => {
        res.send('hello world')
    })

    await mongoose.connect(config.DB.uri,() => {
        console.log('connected to database')
    })

    app.use(express.json())

})()
