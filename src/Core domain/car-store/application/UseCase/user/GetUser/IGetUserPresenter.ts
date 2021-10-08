import {GetUserResponse} from "./GetUserResponse";
import {IUser} from "../../../../Entities/VO/User";

export interface IGetUserPresenter {
    presentGetUser(response: GetUserResponse): any
}