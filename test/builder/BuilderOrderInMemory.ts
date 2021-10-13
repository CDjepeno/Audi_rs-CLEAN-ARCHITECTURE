import {IOrder} from "../../src/Core domain/car-store/Entities/aggregate/Order";
// @ts-ignore
import {BuilderCarInMemory} from "./BuilderCarInMemory";
import {UserRepositoryBuilder} from "./UserRepositoryBuilder";
import {AddOrderRequest} from "../../src/Core domain/car-store/application/UseCase/order/AddOrder/AddOrderRequest";
import {Utils} from "../../src/Core domain/common/Utils";

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

    static orderStubWhithId(): IOrder {
        const user = UserRepositoryBuilder.userStub()
        const car = BuilderCarInMemory.carStub()
        return {
            id: Utils.generateUniqueId(),
            user_id: user.id,
            car_id: car.id,
            amount: 25800,
            date_order: new Date(),
        }
    }

    static ordersStub(): IOrder[] {
        const user = UserRepositoryBuilder.userStub()
        const car = BuilderCarInMemory.carStub()
        return [
            {
                user_id: user.id,
                car_id: car.id,
                amount: 585800,
                date_order: new Date(),
            },
            {
                user_id: user.id,
                car_id: car.id,
                amount: 250000,
                date_order: new Date(),
            },
            {
                user_id: user.id,
                car_id: car.id,
                amount: 40000,
                date_order: new Date(),
            }
        ]

    }
}