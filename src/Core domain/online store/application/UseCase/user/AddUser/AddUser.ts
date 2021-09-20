import {CarRepository} from "../../../../Repository/CarRepository";
import {AddUserRequest} from "./AddUserRequest";
import {AddUserPresenter} from "./AddUserPresenter";
import {AddUserResponse} from "./AddUserResponse";
import {Car} from "../../../../Entities/VO/Car";
import {User} from "../../../../Entities/VO/User";
import {UserRepository} from "../../../../Repository/UserRepository";

export class AddUser {
    constructor(private repository: UserRepository){}

    async execute(request: AddUserRequest, presenter: AddUserPresenter) {
        const response = new AddUserResponse();
        const user = new User(request.owner.firstName, request.owner.lastName,request.owner.address,request.owner.email,request.owner.password, )
        await this.repository.addUser(user)
        response.user = user

        presenter.presentAddCar(response)
    }

}