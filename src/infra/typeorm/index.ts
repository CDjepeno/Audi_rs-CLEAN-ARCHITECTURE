import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express';
import { expressApp } from './express-app';

createConnection().then(async conn => {

  await conn.runMigrations()

  const app = express()

  expressApp(app)

  app.listen(5000)

  console.log("Express server has started on port 5000")
})
.catch(err => console.log(err))
