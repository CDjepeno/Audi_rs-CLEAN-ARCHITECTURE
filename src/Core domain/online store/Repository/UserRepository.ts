import {Car} from "../Entities/VO/Car";
import {IUser} from "../Entities/VO/User";

export interface UserRepository {
    getUsers(): Promise<IUser[]>

    addUser(car: IUser): Promise<"Utilisateur ajouté">

    deleteUser(id: string): Promise<"Utilisateur supprimé">

    getUser(id: string): Promise<IUser>
}