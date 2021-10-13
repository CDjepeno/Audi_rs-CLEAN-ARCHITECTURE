import {GetOrdersResponse} from "./GerOrdersResponse";

export interface IGetOrdersPresenter {
    presentOrders(response: GetOrdersResponse)
}