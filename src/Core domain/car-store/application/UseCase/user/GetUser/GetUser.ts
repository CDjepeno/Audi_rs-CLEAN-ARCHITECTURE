import {IGetUserPresenter} from "./IGetUserPresenter";
import {GetUserResponse} from "./GetUserResponse";
import {IUserRepository} from "../../../../Repository/IUserRepository";


export class GetUser {
    constructor(private repository: IUserRepository){}

    async execute(request: string, presenter?: IGetUserPresenter) {
        const response = new GetUserResponse();
        response.user = await this.repository.getUser(request)
        if(presenter) await presenter.presentGetUser(response)
        return response
    }

}