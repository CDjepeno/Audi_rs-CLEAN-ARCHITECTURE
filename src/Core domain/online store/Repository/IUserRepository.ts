import {Car} from "../Entities/VO/Car";
import {IUser} from "../Entities/VO/User";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>

    addUser(car: IUser): Promise<"Utilisateur ajouté">

    deleteUser(id: string): Promise<"Utilisateur supprimé">

    getUser(id: string): Promise<IUser>
}