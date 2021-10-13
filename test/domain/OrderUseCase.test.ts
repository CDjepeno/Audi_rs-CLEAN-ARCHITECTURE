// @ts-ignore
import {BuilderCarInMemory} from "../builder/BuilderCarInMemory";
import {AddOrder} from "../../src/Core domain/car-store/application/UseCase/order/AddOrder/AddOrder";
// @ts-ignore
import {InMemoryOrderRepository} from "../builder/InMemoryOrderRepository";
import {BuilderOrderInMemory} from "../builder/BuilderOrderInMemory";
import {GetOrder} from "../../src/Core domain/car-store/application/UseCase/order/getOrder/GetOrder";
import { GetOrderRequest } from "../../src/Core domain/car-store/application/UseCase/order/getOrder/GetOrderRequest";
import {IOrder, Order} from "../../src/Core domain/car-store/Entities/aggregate/Order";

describe('Order UseCase', ()=> {
    let id;
    let orderRepository;
    let orderResult;
    beforeEach(async()=> {
        orderRepository = new InMemoryOrderRepository()
        const order = BuilderOrderInMemory.orderStubWhithId()
        await orderRepository.addOrder(order)
        const result = await orderRepository.getOrders()
        id = result[0][0]
        const getOrder = new GetOrder(orderRepository)
        orderResult = await getOrder.execute(id)
    })
    it('Should register a new Order', async()=> {
        const order = BuilderOrderInMemory.orderStub()
        // @ts-ignore
        const addOrder = new AddOrder(orderRepository)
        const result = await addOrder.execute(order)

        expect(result).toBe('Véhicule commandé')
    })

    it('should register get a OrderById', async() => {
        // @ts-ignore
        const getOrder = new GetOrder(orderRepository)
        const result = await getOrder.execute(id)
        expect(result).toEqual(orderResult)
    })
})