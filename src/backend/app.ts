import express from 'express'
import router from "./routes/userRoute";
import {connectDb} from "./database/mongodb";
import * as dotenv from 'dotenv'



console.log(process.env.NODE_ENV)


const app: express.Application = express()

app
    .use(express.json())
    .use(router)

if(process.env.NODE_ENV === "dev") {
    dotenv.config({ path: __dirname+'/config/.dev.env' })
    connectDb(process.env.MONGO_URI)
}
if(process.env.NODE_ENV === "test") {
    dotenv.config({ path: __dirname+'/config/.test.env' })
    connectDb(process.env.MONGO_URI_TEST)
}

app.get('/', (req , res) => {
    res.send('hello world')
})

export default app

