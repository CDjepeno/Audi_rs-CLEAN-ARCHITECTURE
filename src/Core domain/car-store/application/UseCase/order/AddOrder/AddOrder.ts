import { IOrderRepository } from "../../../../Repository/IOrderRepository";
import { IAddOrderPresenter } from "./AddOrderPresenter";
import {AddOrderRequest} from "./AddOrderRequest";
import {AddOrderResponse} from "./AddOrderResponse";
import {Order} from "../../../../Entities/aggregate/Order";

export class AddOrder {
    constructor(private repository: IOrderRepository){}

    async execute(request: AddOrderRequest, presenter?: IAddOrderPresenter) {
        const response = new AddOrderResponse()
        const order = new Order(request.user, request.car, request.amount, request.date_order )
        await this.repository.addOrder(order)
        response.order = order
        return
    }
}