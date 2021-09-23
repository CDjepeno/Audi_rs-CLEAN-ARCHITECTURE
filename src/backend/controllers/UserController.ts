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
    // deleteUser(id: string): Promise<"Utilisateur supprimé"> {
    //     return
    // }
    // getUser(id: string): Promise<IUser> {
    //     return
    // }
    // getUsers(): Promise<IUser[]> {
    //     return
    // }



