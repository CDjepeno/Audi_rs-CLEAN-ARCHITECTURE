import {Car} from "../Entities/Car";
import {IUser} from "../Entities/VO/User";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>

    addUser(car: IUser): Promise<"Utilisateur ajouté">

    userDelete(id: any): Promise<"Utilisateur supprimé">

    getUser(id: string): Promise<IUser>
}