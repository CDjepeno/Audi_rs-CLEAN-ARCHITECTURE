import {ICarRepository} from "../../../../Repository/ICarRepository";
import {AddCarRequest} from "./AddCarRequest";
import {IAddCarPresenter} from "./IAddCarPresenter";
import {AddCarResponse} from "./AddCarResponse";
import {Car} from "../../../../Entities/Car";

export class AddCar {
    constructor(private repository: ICarRepository){}

    async execute(request: AddCarRequest, presenter?: IAddCarPresenter) {
        try {
            const response = new AddCarResponse();
            const car = new Car(request.name, request.km, request.price, request.image, request.owner)
            await this.repository.addCar(car).then(res => {
                if(res.length > 0) {
                    return res;
                }
                response.car = "car added"
                return response
            })
        } catch (err) {
            throw new Error(err)
        }
    }

}