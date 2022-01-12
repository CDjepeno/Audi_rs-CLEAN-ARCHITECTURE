import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express';

createConnection().then(async conn => {

  await conn.runMigrations()

  const app = express()

  app.listen(3000)

  console.log("Express server has started on port 3000")
})
.catch(err => console.log(err))
