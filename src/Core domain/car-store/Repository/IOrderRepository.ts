import { AddOrderRequest } from "../application/UseCase/order/AddOrder/AddOrderRequest";
import { GetOrderRequest } from "../application/UseCase/order/getOrder/GetOrderRequest";
import {IOrder} from "../Entities/aggregate/Order";

export interface IOrderRepository {
    addOrder(booking: AddOrderRequest): Promise<string>
    getOrders(): Promise<IOrder[]>
    getOrder(id: string): Promise<IOrder>
}