import {IOrderRepository} from "../../../../Repository/IOrderRepository";
import {IGetOrdersPresenter} from "./GetOrdersPresenter";
import {GetOrdersResponse} from "./GerOrdersResponse";

export class GetOrders {
    constructor(private repository: IOrderRepository){}

    async execute(presenter?: IGetOrdersPresenter) {
        const response = new GetOrdersResponse()
        response.order = await this.repository.getOrders()
        return response.order
    }
}