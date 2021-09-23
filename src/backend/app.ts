import express from 'express'
import router from "./routes/userRoute";

const app: express.Application = express()

app
    .use(express.json())
    .use(router)

app.get('/', (req , res) => {
    res.send('hello world')
})

export default app

