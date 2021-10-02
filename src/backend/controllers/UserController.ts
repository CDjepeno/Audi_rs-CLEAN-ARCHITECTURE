import {IUser} from "../../Core domain/online store/Entities/VO/User";
import {UserService} from "../services/userService";
import { Request, Response } from "express";
import UserModel, {PasswordVerify} from "../models/userModel";


export const register = async (req: Request, res: Response, next) => {
        try {
            const userService = new UserService()
            const user: IUser = req.body
            await userService.addUser(user)
            res.json('Utilisateur ajouter')
            next()
        } catch (e) {
            throw new Error(e)
        }
}

export const login = (req: Request, res: Response, next) => {
    const { email, password } = req.body;

    return UserModel.findOne({ email })
        .then(user => {
            if(!user) {
                const message = "Utilisateur inconnu"
                return res.status(404).json({ message })
            } else {
                PasswordVerify(user, password, res)
            }
        })
        .catch(err => res.status(500).send(err))
}

export const deleteUser = async(req: Request, res: Response, next) => {
    try {
        const userService = new UserService()
        await userService.userDelete(req.params.id)
        res.json('Utilisateur supprimé')
        next()
    } catch (e) {
        throw new Error(e)
    }
}

 export const getUser = async(req: Request, res: Response, next) => {
    try {
        const userService = new UserService()
        const user = await userService.getUser(req.params.id)
        res.json(user)
        next()
    } catch (e) {
        throw new Error(e)
    }
}

export const getUsers = async(req: Request, res: Response, next) => {
    try {
        const userService = new UserService()
        const users = await userService.getUsers()
        res.json(users)
        next()
    } catch (e) {
        throw new Error(e)
    }
}



