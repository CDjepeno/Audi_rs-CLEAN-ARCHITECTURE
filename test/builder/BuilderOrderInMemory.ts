import {IOrder} from "../../src/Core domain/car-store/Entities/aggregate/Order";
// @ts-ignore
import {BuilderCarInMemory} from "./BuilderCarInMemory";
import {UserRepositoryBuilder} from "./UserRepositoryBuilder";

export class BuilderOrderInMemory {
    static orderStub(): IOrder {
        const booker = UserRepositoryBuilder.userStub()
        const car = BuilderCarInMemory.carStub()
        return {
            booker: booker.id,
            car: car.id,
            amount: 25800,
            date_order: new Date(),
        }
    }

    static ordersStub(): IOrder[] {
        const booker = UserRepositoryBuilder.userStub()
        const car = BuilderCarInMemory.carStub()
        return [
            {
                booker: booker.id,
                car: car.id,
                amount: 25800,
                date_order: new Date(),
            },
            {
                booker: booker.id,
                car: car.id,
                amount: 25800,
                date_order: new Date(),
            },
            {
                booker: booker.id,
                car: car.id,
                amount: 25800,
                date_order: new Date(),
            }
        ]

    }
}