import {CarRepository} from "../../Repository/CarRepository";
import {AddCarRequest} from "./AddCarRequest";
import {AddCarPresenter} from "./AddCarPresenter";
import {AddCarResponse} from "./AddCarResponse";
import {Car} from "../../Entities/Car";
import {Utils} from "../../../common/Utils";

export class AddCar {
    constructor(private repository: CarRepository){}

    async execute(request: AddCarRequest, presenter: AddCarPresenter) {
        const response = new AddCarResponse();
        const id = Utils.generateUniqueId()
        const car = new Car(id, request.name, request.km, request.price, request.image, request.owner, request.available)
        await this.repository.addCar(car)
        response.car = car

        presenter.presentAddCar(response)
    }

    validate(addCarRequest: AddCarRequest, presenter: AddCarPresenter) {
        // const errors = new Map<>
    }
}