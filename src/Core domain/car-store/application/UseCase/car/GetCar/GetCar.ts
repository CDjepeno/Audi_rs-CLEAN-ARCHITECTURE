import {ICarRepository} from "../../../../Repository/ICarRepository";
import {GetCarPresenter} from "./GetCarPresenter";
import {GetCarResponse} from "./GetCarResponse";
import { GetCarRequest } from './GetCarRequest';


export class GetCar {
    constructor(private repository: ICarRepository){}

    async execute(getCarRequest: GetCarRequest, presenter?: GetCarPresenter) {
        const response = new GetCarResponse();
        response.car = await this.repository.getCar(getCarRequest.id)
        if(presenter) presenter.presentGetCar(response)
        return response
    }

}