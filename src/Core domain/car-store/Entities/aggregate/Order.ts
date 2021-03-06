import {Utils} from "../../../common/Utils";

export interface IOrder {
    id?: string,
    user_id: string,
    car_id: string,
    amount: number,
    date_order?: Date,
}

export class Order implements IOrder {
     id?: string
    constructor(
        readonly user_id: string,
        readonly car_id: string,
        readonly amount: number,
        readonly date_order: Date
    ) {
        this.id = Utils.generateUniqueId()
        this.date_order = new Date()
    }

}