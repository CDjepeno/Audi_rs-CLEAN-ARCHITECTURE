import {ICarRepository} from "../../../../Repository/ICarRepository";
import {GetCarRequest} from "./GetCarRequest";
import {GetCarPresenter} from "./GetCarPresenter";
import {GetCarResponse} from "./GetCarResponse";
import {Car} from "../../../../Entities/Car";


export class GetCar {
    constructor(private repository: ICarRepository){}

    async execute(request: string, presenter?: GetCarPresenter) {
        const response = new GetCarResponse();
        response.car = await this.repository.getCar(request)
        if(presenter) presenter.presentGetCar(response)
        return response
    }

}