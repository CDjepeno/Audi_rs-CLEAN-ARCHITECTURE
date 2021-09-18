import express from 'express'
import bodyParser from 'body-parser'
import config  from './config/config'

const app: express.Application = express()

// app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.get('/', (req , res) => {
    res.send('hello world')
})

app.listen(config.server, () => console.log(`Serveur running ${config.server.port}`))