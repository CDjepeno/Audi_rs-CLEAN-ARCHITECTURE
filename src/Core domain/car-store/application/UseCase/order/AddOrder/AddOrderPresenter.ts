import { AddOrderResponse } from "./AddOrderResponse";

export interface IAddOrderPresenter {
    presentOrder(response: AddOrderResponse)
}