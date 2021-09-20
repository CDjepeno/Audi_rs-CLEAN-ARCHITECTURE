import {AddUserResponse} from "./AddUserResponse";

export interface AddUserPresenter {
    presentAddCar(response: AddUserResponse): void
}