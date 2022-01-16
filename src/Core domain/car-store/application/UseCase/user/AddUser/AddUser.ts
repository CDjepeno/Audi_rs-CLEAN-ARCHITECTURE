import {AddUserRequest} from "./AddUserRequest";
import {IAddUserPresenter} from "./IAddUserPresenter";
import {AddUserResponse} from "./AddUserResponse";
import {User} from "../../../../Entities/VO/User";
import {IUserRepository} from "../../../../Repository/IUserRepository";

export class AddUser {
    constructor(private repository: IUserRepository){}

    async execute(request: AddUserRequest, presenter?: IAddUserPresenter):Promise<any> {
            const response = new AddUserResponse();
            const user = new User(request.firstname, request.lastname,request.address,request.email,request.password)
            const res = await this.repository.addUser(user)
            return res
    }

}

