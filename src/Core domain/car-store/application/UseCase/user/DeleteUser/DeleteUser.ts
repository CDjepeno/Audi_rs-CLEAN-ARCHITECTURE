import {IUser} from "../../../../Entities/VO/User";
import { IDeleteUserPresenter } from "./IDeleteUserPresenter";
import {DeleteUserResponse} from "./DeleteUserResponse";
import {IUserRepository} from "../../../../Repository/IUserRepository";


export class DeleteUser {
    constructor(private repository: IUserRepository){}

    async execute(request: IUser, presenter?: IDeleteUserPresenter) {
        let response = new DeleteUserResponse();
        response.string = await this.repository.userDelete(request.id)
        await presenter.presentDeleteUser(response)
    }

}