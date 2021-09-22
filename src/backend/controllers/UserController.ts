import {IUserRepository} from "../../Core domain/online store/Repository/IUserRepository";
import {IUser, User} from "../../Core domain/online store/Entities/VO/User";
import userModel from "../models/userModel";
import {AddUser} from "../../Core domain/online store/application/UseCase/user/AddUser/AddUser";
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
    export default createUser
    // deleteUser(id: string): Promise<"Utilisateur supprimé"> {
    //     return
    // }
    // getUser(id: string): Promise<IUser> {
    //     return
    // }
    // getUsers(): Promise<IUser[]> {
    //     return
    // }



