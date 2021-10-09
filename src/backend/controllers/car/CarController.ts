import { Request, Response } from "express";
import {CarService} from "../../services/carService";
import {
    addCarInteractor,
    deleteCarInteractor,
    getCarInteractor, getCarsInteractor
} from "../../../Core domain/car-store/application/adapters/car/carAdapter";

export class CarController {
    async createCar(req: Request, res: Response) {
        try {
            const car = req.body
            await addCarInteractor.execute(car)
            res.json('Véhicule ajouté')
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteCar(req: Request, res: Response) {
        try {
            const carService = new CarService()
            await deleteCarInteractor.execute(req.params.id)
            await carService.deleteCar(req.params.id)
            res.json('Véhicule supprimé')
        } catch (e) {
            throw new Error(e)
        }
    }

    async getCar(req: Request, res: Response) {
        try {
            const user = await getCarInteractor.execute(req.params.id)
            res.json(user)
        } catch (e) {
            throw new Error(e)
        }
    }

    async getCars(req: Request, res: Response) {
        try {
            const cars = await getCarsInteractor.execute()
            res.json(cars)
            return cars
        } catch (e) {
            throw new Error(e)
        }
    }
}











