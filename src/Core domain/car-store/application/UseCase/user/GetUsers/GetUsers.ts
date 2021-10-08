import { IGetUsersPresenter} from "./GetUsersPresenter";
import {GetUsersResponse} from "./GetUsersResponse";
import {IUserRepository} from "../../../../Repository/IUserRepository";


export class GetUsers {
    constructor(private repository: IUserRepository){}

    async execute(presenter?: IGetUsersPresenter) {
        const response = new GetUsersResponse();
        response.users = await this.repository.getUsers()
        if(presenter) await presenter.presentGetUsers(response)
        return response
    }

}