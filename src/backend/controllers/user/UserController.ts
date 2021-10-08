import {UserService} from "../../services/userService";
import { Request, Response } from "express";
import UserModel, {PasswordVerify} from "../../models/userModel";
import {
    addUserInteractor,
    deleteUserInteractor,
    getUserInteractor, getUsersInteractor
} from "../../../Core domain/car-store/application/interactors/user";
import {UserPresenter} from "./UserPresenter";



export class UserController {

    async register(req: Request, res: Response, next) {
        try {
            const user = req.body
            await addUserInteractor.execute(user)
            res.json('Utilisateur ajouter')
            next()
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUser(req: Request, res: Response, next) {
        try {
            const user = await getUserInteractor.execute(req.params.id)
            res.json(user)
            next()
        } catch (e) {
            throw new Error(e)
        }
    }

    async login(req: Request, res: Response) {
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

    async deleteUser(req: Request, res: Response, next) {
        try {
            const userService = new UserService()
            const id = req.params.id
            const user = await userService.getUser(id)
            await deleteUserInteractor.execute(user)
            res.json('Utilisateur supprimé')
            next()
        } catch (e) {
            throw new Error(e)
        }
    }



    async getUsers(req: Request, res: Response, next) {
        try {
            const userService = new UserService()
            const users = await getUsersInteractor.execute()
            res.json(users)
            next()
        } catch (e) {
            throw new Error(e)
        }
    }
}







//

//

//


