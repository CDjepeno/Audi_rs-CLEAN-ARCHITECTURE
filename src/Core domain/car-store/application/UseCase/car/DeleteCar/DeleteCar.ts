import {ICarRepository} from "../../../../Repository/ICarRepository";
import {DeleteCarPresenter} from "./DeleteCarPresenter";
import {ICar} from "../../../../Entities/Car";


export class DeleteCar {
    constructor(private repository: ICarRepository){}

    async execute(request: string, presenter?: DeleteCarPresenter) {
        let response: "Véhicule supprimé";
        response = await this.repository.deleteCar(request)
        if(presenter) await presenter.presentDeleteCar(response)
    }

}