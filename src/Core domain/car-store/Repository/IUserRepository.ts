import { ValidationError } from "class-validator";
import {IUser} from "../Entities/VO/User";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>

    addUser(user: IUser): Promise<string|ValidationError[]>

    deleteUser(id: number): Promise<string>

    getUser(id: number): Promise<IUser>
}