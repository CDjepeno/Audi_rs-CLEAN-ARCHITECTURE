import {GetUserResponse} from "./GetUserResponse";

export interface IGetUserPresenter {
    presentGetUser(response: GetUserResponse): void
}