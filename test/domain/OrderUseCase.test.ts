// @ts-ignore
import {BuilderCarInMemory} from "../builder/BuilderCarInMemory";
import {AddOrder} from "../../src/Core domain/car-store/application/UseCase/order/AddOrder/AddOrder";
// @ts-ignore
import {InMemoryOrderRepository} from "../builder/InMemoryOrderRepository";
import {BuilderOrderInMemory} from "../builder/BuilderOrderInMemory";

describe('Order UseCase', ()=> {
    it('Should register a new Order', async()=> {
        const order = BuilderOrderInMemory.orderStub()
        const orderRepository = new InMemoryOrderRepository()
        const addOrder = new AddOrder(orderRepository)
        const result = await addOrder.execute(order)

        expect(result).toBe('Véhicule commandé')
    })
})