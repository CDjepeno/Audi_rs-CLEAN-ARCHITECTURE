import {AddUserResponse} from "./AddUserResponse";

export interface IAddUserPresenter {
    presentAddUser(response: AddUserResponse): void
}