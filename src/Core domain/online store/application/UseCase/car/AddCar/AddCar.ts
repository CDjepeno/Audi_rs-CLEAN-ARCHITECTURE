import {CarRepository} from "../../../../Repository/ICarRepository";
import {AddCarRequest} from "./AddCarRequest";
import {AddCarPresenter} from "./AddCarPresenter";
import {AddCarResponse} from "./AddCarResponse";
import {Car} from "../../../../Entities/VO/Car";
import {User} from "../../../../Entities/VO/User";

export class AddCar {
    constructor(private repository: CarRepository){}

    async execute(request: AddCarRequest, presenter: AddCarPresenter) {
        const response = new AddCarResponse();
        const user = new User(request.owner.firstName, request.owner.lastName,request.owner.address,request.owner.email,request.owner.password, )
        const car = new Car(request.name, request.km, request.price, request.image, user)
        await this.repository.addCar(car)
        response.car = car

        presenter.presentAddCar(response)
    }

}