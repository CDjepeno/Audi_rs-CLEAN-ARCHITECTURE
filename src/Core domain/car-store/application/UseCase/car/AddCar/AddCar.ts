import {ICarRepository} from "../../../../Repository/ICarRepository";
import {AddCarRequest} from "./AddCarRequest";
import {AddCarPresenter} from "./AddCarPresenter";
import {AddCarResponse} from "./AddCarResponse";
import {Car} from "../../../../Entities/Car";
import {User} from "../../../../Entities/VO/User";

export class AddCar {
    constructor(private repository: ICarRepository){}

    async execute(request: AddCarRequest, presenter?: AddCarPresenter) {
        const response = new AddCarResponse();
        const car = new Car(request.name, request.km, request.price, request.image, request.owner)
        await this.repository.addCar(car)
        response.car = car
        if(presenter) presenter.presentAddCar(response)
    }

}