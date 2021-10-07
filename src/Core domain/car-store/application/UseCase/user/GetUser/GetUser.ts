import {ICarRepository} from "../../../../Repository/ICarRepository";
import {IGetUserPresenter} from "./IGetUserPresenter";
import {GetUserResponse} from "./GetUserResponse";
import {Car} from "../../../../Entities/Car";


export class GetUser {
    constructor(private repository: ICarRepository){}

    async execute(request: Car, presenter: IGetUserPresenter) {
        const response = new GetUserResponse();
        response.user = await this.repository.getCar(request.id)
        presenter.presentGetUser(response)
    }

}