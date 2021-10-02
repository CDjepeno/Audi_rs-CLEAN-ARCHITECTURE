import { ICarRepository } from "../../Core domain/online store/Repository/ICarRepository";
import {ICar} from "../../Core domain/online store/Entities/VO/Car";
import CarModel from "../models/carModel";

export class CarService implements ICarRepository {
    async addCar(car: ICar): Promise<"Véhicule ajouté"> {
        try {
            await CarModel.create(car)
            return "Véhicule ajouté"
        } catch (e) {
            throw new Error(e)
        }
    }

    async getCars(): Promise<ICar[]> {
        try {
            return await CarModel.find({})
        } catch (e) {
            throw new Error(e)
        }
    }

    // @ts-ignore
    async getCar(id: string): Promise<ICar> {
        try {
            return await CarModel.findById(id)
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteCar(id: string): Promise<"Véhicule supprimé"> {
        try {
            await CarModel.findByIdAndDelete(id)
            return 'Véhicule supprimé'
        } catch (e) {
            throw new Error(e)
        }
    }
}