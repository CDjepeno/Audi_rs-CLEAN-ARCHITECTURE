import { ICar } from "../Car";
import {IUser} from "../VO/User";

export class Booking {
    private booker_id: string
    private car_id: string
    private amount: number
    private date_order: Date

    constructor(c: string, b: string) {
        this.car_id = c;
        this.booker_id = b;
    }

}