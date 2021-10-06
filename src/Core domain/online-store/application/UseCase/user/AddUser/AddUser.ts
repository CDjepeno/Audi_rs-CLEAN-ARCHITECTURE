import {AddUserRequest} from "./AddUserRequest";
import {IAddUserPresenter} from "./IAddUserPresenter";
import {AddUserResponse} from "./AddUserResponse";
import {User} from "../../../../Entities/VO/User";
import {IUserRepository} from "../../../../Repository/IUserRepository";

export class AddUser {
    constructor(private repository: IUserRepository){}

    async execute(request: AddUserRequest, presenter: IAddUserPresenter) {
        const response = new AddUserResponse();
        const user = new User(request.firstName, request.lastName,request.address,request.email,request.password)
        await this.repository.addUser(user)
        response.user = user

        presenter.presentAddUser(response)
    }

}