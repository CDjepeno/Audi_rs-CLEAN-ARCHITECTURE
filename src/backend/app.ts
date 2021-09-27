import express from 'express'
import router from "./routes/userRoute";
import dotenv from 'dotenv'
import {connectDb} from "./database/mongodb";


dotenv.config()

const app: express.Application = express()

app
    .use(express.json())
    .use(router)


connectDb(process.env.MONGO_URI)

app.get('/', (req , res) => {
    res.send('hello world')
})

export default app

