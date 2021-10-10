import { ICar } from "../Car";
import {IUser} from "../VO/User";
import {Utils} from "../../../common/Utils";

export interface IOrder {
    id?: string,
    booker: string,
    car: string,
    amount: number,
    date_order?: Date,
}

export class Order {
    private id?: string
    private booker_id: string
    private car_id: string
    private amount: number
    private date_order: Date

    constructor() {
        this.id = Utils.generateUniqueId()
        this.date_order = new Date()
    }

}