import { ValidationError } from "class-validator";
import {Car} from "../Entities/Car";
import {IUser} from "../Entities/VO/User";

export interface IUserRepository {
    getUsers(): Promise<IUser[]>

    addUser(user: IUser): Promise<string|ValidationError[]>

    userDelete(id: number): Promise<string>

    getUser(id: number): Promise<IUser>
}