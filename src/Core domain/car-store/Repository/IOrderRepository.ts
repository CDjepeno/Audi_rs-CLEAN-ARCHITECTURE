import {IOrder} from "../Entities/aggregate/Order";

export interface IOrderRepository {
    addOrder(booking: IOrder): Promise<string>
    getOrders(): Promise<IOrder[]>
    getOrder(id: string): Promise<IOrder>
}