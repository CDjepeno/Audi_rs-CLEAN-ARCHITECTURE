import {CarRepository} from "../../../Repository/CarRepository";
import {AddCarRequest} from "./AddCarRequest";
import {AddCarPresenter} from "./AddCarPresenter";
import {AddCarResponse} from "./AddCarResponse";
import {Car} from "../../../Entities/VO/Car";
import {Utils} from "../../../../common/Utils";

export class AddCar {
    constructor(private repository: CarRepository){}

    async execute(request: AddCarRequest, presenter: AddCarPresenter) {
        const response = new AddCarResponse();
        const id = Utils.generateUniqueId()
        const car = new Car(request.name, request.km, request.price, request.image, request.owner)
        await this.repository.addCar(car)
        response.car = car

        presenter.presentAddCar(response)
    }

}