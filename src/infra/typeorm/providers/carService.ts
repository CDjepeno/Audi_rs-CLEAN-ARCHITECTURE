import { validate } from "class-validator";
import { getRepository } from "typeorm";
import { ICar } from "../../../Core domain/car-store/Entities/Car";
import { ICarRepository } from "../../../Core domain/car-store/Repository/ICarRepository";
import { Car } from "../models/Car";

export class CarProvider implements ICarRepository {
  async addCar(car: ICar) {
    try {
      const newCar = getRepository(Car).create(car)

      const err = await validate(newCar)

      if(err.length > 0) {
        return err
      } else {
        await getRepository(Car).save(newCar)
        return "Car added"
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  async getCars() {
    try {
      const cars = await getRepository(Car).find()

      if(cars) {
        return cars
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  async deleteCar(idCar: number) {
    try {
      const deleteCar = await getRepository(Car).findOne(idCar)
      if(deleteCar) {
        await getRepository(Car).delete(deleteCar)
        return 'car deleted'
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  async getCar(idCar: number) {
    try {
      const car = await getRepository(Car).findOne(idCar)
      if(car) {
        return car
      }
      
    } catch (error) {
      throw new Error(error)
    }


  }
}