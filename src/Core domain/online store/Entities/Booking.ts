import { ICar } from "./VO/Car";
import {IUser} from "./VO/User";

export class Booking {
    private booker: IUser
    private car: ICar
    private amount: number
    private date_order: Date

    constructor(c: ICar, b: IUser) {
        this.car = c;
        this.booker = b;
    }

    isBookable(user: IUser, car: ICar) {
        if(car.available) {
            return true
        }
    }
}