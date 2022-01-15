import {ICarRepository} from "../../../../Repository/ICarRepository";
import {DeleteCarPresenter} from "./DeleteCarPresenter";
import {ICar} from "../../../../Entities/Car";
import {DeleteCarRequest} from "./DeleteCarRequest";


export class DeleteCar {
    constructor(private repository: ICarRepository){}

    async execute(deleteCarRequest: DeleteCarRequest, presenter?: DeleteCarPresenter) {
        let response: "Véhicule supprimé";
        response = await this.repository.deleteCar(deleteCarRequest.id)
        if(presenter) await presenter.presentDeleteCar(response)
    }

}