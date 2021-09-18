import express from 'express'
import config  from './config/config'
import * as mongoose from "mongoose";

(async () => {
    await mongoose.connect(config.DB.uri)

    const app: express.Application = express()

    app.use(express.json())


    app.get('/', (req , res) => {
        res.send('hello world')
    })

    app.listen(config.server.port, () => console.log(`Serveur running ${config.server.port}`))
})()
