import {IUser} from "../../Core domain/online store/Entities/VO/User";
import {UserService} from "../services/userService";
import { Request, Response } from "express";


export const createUser = async (req: Request, res: Response) => {
        try {
            const user: IUser = req.body
            const userService = new UserService()
            await userService.addUser(user)
            res.json('Utilisateur ajouter')
        } catch (e) {
            throw new Error(e)
        }
}

export const deleteUser = async(req: Request, res: Response) => {
    try {
        const userService = new UserService()
        await userService.userDelete(req.params.id)
        res.json('Utilisateur supprimé')
    } catch (e) {
        throw new Error(e)
    }
}

 export const getUser = async(req: Request, res: Response) => {
    try {
        const userService = new UserService()
        const user = await userService.getUser(req.params.id)
        res.json(user)
    } catch (e) {
        throw new Error(e)
    }
}

export const getUsers = async(req: Request, res: Response) => {
    try {
        const userService = new UserService()
        const users = await userService.getUsers()
        res.json(users)
        return users
    } catch (e) {
        throw new Error(e)
    }
}



