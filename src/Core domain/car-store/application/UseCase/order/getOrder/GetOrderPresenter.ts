import {GetOrderResponse} from "./GerOrderResponse";

export interface IGetOrderPresenter {
    presentOrder(response: GetOrderResponse)
}