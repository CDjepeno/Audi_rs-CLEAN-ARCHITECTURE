import { Request, Response } from "express";
import { addCarInteractor } from "../providers/adapters/car/carAdapter";

export class CarController {
  static save = async (request:Request, response: Response) => {
    try {
      const newCar = request.body;
      const result = await addCarInteractor.execute(newCar)
      console.log(result)
    //   if(result.length > 0) {
    //     return response.status(400).json(result)
    //   } else {
    //     return response.status(201).json(result)
    //   }
    } catch (err) {
      throw new Error(err)
    }
  }

}