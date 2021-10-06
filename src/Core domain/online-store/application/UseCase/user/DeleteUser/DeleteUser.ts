import {ICarRepository} from "../../../../Repository/ICarRepository";
import {IUser} from "../../../../Entities/VO/User";
import { IDeleteUserPresenter } from "./IDeleteUserPresenter";
import {DeleteUserResponse} from "./DeleteUserResponse";


export class DeleteUser {
    constructor(private repository: ICarRepository){}

    async execute(request: IUser, presenter: IDeleteUserPresenter) {
        let response = new DeleteUserResponse();
        response.string = await this.repository.deleteCar(request.id)
        await presenter.presentDeleteUser(response)
    }

}