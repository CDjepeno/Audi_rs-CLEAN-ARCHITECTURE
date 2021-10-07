import {GetUsersResponse} from "./GetUsersResponse";

export interface IGetUsersPresenter {
    presentGetUsers(response: GetUsersResponse): void
}