import {IOrderRepository} from "../../src/Core domain/car-store/Repository/IOrderRepository";
import {Order, IOrder} from "../../src/Core domain/car-store/Entities/aggregate/Order";
// @ts-ignore
import {BuilderOrderInMemory} from "./BuilderOrderInMemory";
import {GetOrderRequest} from "../../src/Core domain/car-store/application/UseCase/order/getOrder/GetOrderRequest";

export class InMemoryOrderRepository implements IOrderRepository {
        private orders: Map<string, IOrder>

        constructor() {
                this.orders = new Map()
        }

        async getOrder(id: string): Promise<IOrder> {
                return Promise.resolve(this.orders.get(id))
        }

        async addOrder(order: IOrder): Promise<string> {
                if(this.orders.get(order.id)) {
                        this.orders.delete(order.id)
                }
                this.orders.set(order.id, order)
                // return Promise.resolve('Véhicule ajouté')
                return 'Véhicule ajouté'
        }

        async getOrders(): Promise<IOrder[]> {
                const result = BuilderOrderInMemory.ordersStub()
                const res = this.orders.values()
                let tab = []
                for (let order of this.orders) {
                        tab.push(order)
                }
                return tab
                // return Promise.resolve(this.orders.values())
        }
}