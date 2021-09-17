import {CarRepository} from "../../../Repository/CarRepository";
import {GetCarsPresenter} from "./GetCarsPresenter";
import {GetCarsResponse} from "./GetCarsResponse";


export class GetCars {
    constructor(private repository: CarRepository){}

    async execute(presenter: GetCarsPresenter) {
        const response = new GetCarsResponse();
        response.cars = await this.repository.getCars()
        presenter.presentAddCar(response)
    }

}