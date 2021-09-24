import {ICarRepository} from "../../../../Repository/ICarRepository";
import {DeleteCarPresenter} from "./DeleteCarPresenter";
import {ICar} from "../../../../Entities/VO/Car";


export class DeleteCar {
    constructor(private repository: ICarRepository){}

    async execute(request: ICar, presenter: DeleteCarPresenter) {
        let response: "Véhicule supprimé";
        response = await this.repository.deleteCar(request.id)
        await presenter.presentDeleteCar(response)
    }

}