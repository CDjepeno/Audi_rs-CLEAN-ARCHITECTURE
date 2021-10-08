import {ICarRepository} from "../../../../Repository/ICarRepository";
import {GetCarsPresenter} from "./GetCarsPresenter";
import {GetCarsResponse} from "./GetCarsResponse";


export class GetCars {
    constructor(private repository: ICarRepository){}

    async execute(presenter?: GetCarsPresenter) {
        const response = new GetCarsResponse();
        response.cars = await this.repository.getCars()
        if(presenter) presenter.presentGetCars(response)
        return response
    }

}