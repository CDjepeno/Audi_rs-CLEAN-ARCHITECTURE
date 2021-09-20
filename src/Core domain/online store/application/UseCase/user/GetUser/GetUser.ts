import {CarRepository} from "../../../../Repository/CarRepository";
import {GetCarRequest} from "./GetCarRequest";
import {GetCarPresenter} from "./GetCarPresenter";
import {GetCarResponse} from "./GetCarResponse";
import {Car} from "../../../../Entities/VO/Car";


export class GetUser {
    constructor(private repository: CarRepository){}

    async execute(request: Car, presenter: GetCarPresenter) {
        const response = new GetCarResponse();
        response.car = await this.repository.getCar(request.id)
        presenter.presentGetCar(response)
    }

}