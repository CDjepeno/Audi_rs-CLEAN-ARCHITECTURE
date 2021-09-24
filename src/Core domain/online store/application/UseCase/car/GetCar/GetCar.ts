import {ICarRepository} from "../../../../Repository/ICarRepository";
import {GetCarRequest} from "./GetCarRequest";
import {GetCarPresenter} from "./GetCarPresenter";
import {GetCarResponse} from "./GetCarResponse";
import {Car} from "../../../../Entities/VO/Car";


export class GetCar {
    constructor(private repository: ICarRepository){}

    async execute(request: Car, presenter: GetCarPresenter) {
        const response = new GetCarResponse();
        response.car = await this.repository.getCar(request.id)
        presenter.presentGetCar(response)
    }

}