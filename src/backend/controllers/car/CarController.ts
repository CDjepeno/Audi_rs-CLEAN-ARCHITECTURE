import {IUser} from "../../../Core domain/online-store/Entities/VO/User";
import {UserService} from "../../services/userService";
import { Request, Response } from "express";
import {CarService} from "../../services/carService";
import {ICar} from "../../../Core domain/online-store/Entities/Car";


export const createCar = async (req: Request, res: Response) => {
        try {
            const carService = new CarService()
            const car: ICar = req.body
            await carService.addCar(car)
            res.json('Véhicule ajouté')
        } catch (e) {
            throw new Error(e)
        }
}

export const deleteCar = async(req: Request, res: Response) => {
    try {
        const carService = new CarService()
        await carService.deleteCar(req.params.id)
        res.json('Véhicule supprimé')
    } catch (e) {
        throw new Error(e)
    }
}

 export const getCar = async(req: Request, res: Response) => {
    try {
        const carService = new CarService()
        const user = await carService.getCar(req.params.id)
        res.json(user)
    } catch (e) {
        throw new Error(e)
    }
}

export const getCars = async(req: Request, res: Response) => {
    try {
        const carService = new CarService()
        const cars = await carService.getCars()
        res.json(cars)
        return cars
    } catch (e) {
        throw new Error(e)
    }
}



