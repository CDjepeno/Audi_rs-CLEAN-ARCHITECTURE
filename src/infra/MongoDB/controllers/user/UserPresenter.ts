import { IAddUserPresenter } from "../../../../Core domain/car-store/application/UseCase/user/AddUser/IAddUserPresenter";
import { IDeleteUserPresenter } from "../../../../Core domain/car-store/application/UseCase/user/DeleteUser/IDeleteUserPresenter";
import {IGetUserPresenter} from "../../../../Core domain/car-store/application/UseCase/user/GetUser/IGetUserPresenter";
import {AddUserResponse} from "../../../../Core domain/car-store/application/UseCase/user/AddUser/AddUserResponse";
import {DeleteUserResponse} from "../../../../Core domain/car-store/application/UseCase/user/DeleteUser/DeleteUserResponse";
import {GetUserResponse} from "../../../../Core domain/car-store/application/UseCase/user/GetUser/GetUserResponse";
import {IGetUsersPresenter} from "../../../../Core domain/car-store/application/UseCase/user/GetUsers/GetUsersPresenter";
import {GetUsersResponse} from "../../../../Core domain/car-store/application/UseCase/user/GetUsers/GetUsersResponse";

export class UserPresenter implements IAddUserPresenter, IDeleteUserPresenter, IGetUserPresenter, IGetUsersPresenter {
    response: any

    presentAddUser(response: AddUserResponse) {
        this.response = response
    }
    presentDeleteUser(response: DeleteUserResponse) {
        this.response = response
    }
    presentGetUser(response: GetUserResponse) {
        this.response = response
    }
    presentGetUsers(response: GetUsersResponse) {
        this.response = response
    }


}