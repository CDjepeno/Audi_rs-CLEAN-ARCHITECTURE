import {ICarRepository} from "../../../../Repository/ICarRepository";
import { IGetUsersPresenter} from "./GetUsersPresenter";
import {GetUsersResponse} from "./GetUsersResponse";


export class GetUsers {
    constructor(private repository: ICarRepository){}

    async execute(presenter: IGetUsersPresenter) {
        const response = new GetUsersResponse();
        response.users = await this.repository.getCars()
        presenter.presentGetUsers(response)
    }

}