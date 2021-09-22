import {IUser} from "../../Core domain/online store/Entities/VO/User";
import {IUserRepository} from "../../Core domain/online store/Repository/IUserRepository";
import userModel from "../models/userModel";


export class UserService implements IUserRepository {
    async addUser(user: IUser): Promise<"Utilisateur ajouté"> {
        try {
            await userModel.create(user)
            return "Utilisateur ajouté"
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteUser(id: string): Promise<"Utilisateur supprimé"> {
        return
    }

    async getUser(id: string): Promise<IUser> {
        return
    }

    async getUsers(): Promise<IUser[]> {
        return
    }
}
