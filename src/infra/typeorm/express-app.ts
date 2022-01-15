import * as express from 'express';
import * as cors from 'cors';
import carRoutes from './routes/carRoutes';

export const expressApp = async (app) => {
  app.use(express.json())
  app.use(cors())
  app.use(carRoutes)
}