import {IUser} from "../../../Core domain/car-store/Entities/VO/User";
import {IUserRepository} from "../../../Core domain/car-store/Repository/IUserRepository";
import UserModel from "../models/userModel";


export class UserService implements IUserRepository {
    async addUser(user: IUser): Promise<"Utilisateur ajouté"> {
        try {
            await UserModel.create(user)
            return "Utilisateur ajouté"
        } catch (e) {
            throw new Error(e)
        }
    }

    async userDelete(id: string): Promise<"Utilisateur supprimé"> {
        try {
            await UserModel.findByIdAndDelete(id)
            return 'Utilisateur supprimé'
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUser(id: string): Promise<IUser> {
        try {
            return await UserModel.findById(id)
        } catch (e) {
            throw new Error(e)
        }
    }

    async getUsers(): Promise<IUser[]> {
        return await UserModel.find({})
    }
}
