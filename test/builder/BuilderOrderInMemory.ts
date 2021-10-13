import {IOrder} from "../../src/Core domain/car-store/Entities/aggregate/Order";
// @ts-ignore
import {BuilderCarInMemory} from "./BuilderCarInMemory";
import {UserRepositoryBuilder} from "./UserRepositoryBuilder";
import {AddOrderRequest} from "../../src/Core domain/car-store/application/UseCase/order/AddOrder/AddOrderRequest";

export class BuilderOrderInMemory {
    static orderStub(): AddOrderRequest {
        const user = UserRepositoryBuilder.userStub()
        const car = BuilderCarInMemory.carStub()
        return {
            user_id: user.id,
            car_id: car.id,
            amount: 25800,
            date_order: new Date(),
        }
    }

    static ordersStub(): IOrder[] {
        const booker = UserRepositoryBuilder.userStub()
        const car = BuilderCarInMemory.carStub()
        return [
            {
                booker_id: booker.id,
                car_id: car.id,
                amount: 25800,
                date_order: new Date(),
            },
            {
                booker_id: booker.id,
                car_id: car.id,
                amount: 25800,
                date_order: new Date(),
            },
            {
                booker_id: booker.id,
                car_id: car.id,
                amount: 25800,
                date_order: new Date(),
            }
        ]

    }
}