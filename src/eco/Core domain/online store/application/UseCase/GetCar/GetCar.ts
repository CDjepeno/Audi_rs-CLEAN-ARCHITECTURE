import {CarRepository} from "../../../Repository/CarRepository";
import {GetCarRequest} from "./GetCarRequest";
import {GetCarPresenter} from "./GetCarPresenter";
import {GetCarResponse} from "./GetCarResponse";


export class GetCar {
    constructor(private repository: CarRepository){}

    async execute(request: GetCarRequest, presenter: GetCarPresenter) {
        const response = new GetCarResponse();
        response.car = await this.repository.getCar(request.id)
        presenter.presentAddCar(response)
    }

}