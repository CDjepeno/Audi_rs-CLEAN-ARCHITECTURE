import {CarRepository} from "../../../Repository/CarRepository";
import {DeleteCarPresenter} from "./DeleteCarPresenter";
import {Car} from "../../../Entities/VO/Car";


export class DeleteCar {
    constructor(private repository: CarRepository){}

    async execute(request: Car, presenter: DeleteCarPresenter) {
        let response: "Véhicule supprimé";
        response = await this.repository.deleteCar(request)
        await presenter.presentDeleteCar(response)
    }

}