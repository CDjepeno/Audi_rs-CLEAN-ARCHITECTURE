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

    async userDelete(id: string): Promise<"Utilisateur supprimé"> {
        try {
            await userModel.findByIdAndDelete(id)
            return 'Utilisateur supprimé'
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUser(id: string): Promise<IUser> {
        try {
            return await userModel.findById(id)
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUsers(): Promise<IUser[]> {
        return await userModel.find({})
    }
}
