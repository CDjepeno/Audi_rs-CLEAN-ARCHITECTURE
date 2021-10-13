import {IOrderRepository} from "../../../../Repository/IOrderRepository";
import {IGetOrderPresenter} from "./GetOrderPresenter";
import {GetOrderResponse} from "./GerOrderResponse";

export class GetOrder {
    constructor(private repository: IOrderRepository){}

    async execute(request: string, presenter?: IGetOrderPresenter) {
        const response = new GetOrderResponse()
        response.order = await this.repository.getOrder(request)
        return response.order
    }
}