// @ts-ignore
import {BuilderCarInMemory} from "../builder/BuilderCarInMemory";
import {AddOrder} from "../../src/Core domain/car-store/application/UseCase/order/AddOrder/AddOrder";
// @ts-ignore
import {InMemoryOrderRepository} from "../builder/InMemoryOrderRepository";
import {BuilderOrderInMemory} from "../builder/BuilderOrderInMemory";
import {GetOrder} from "../../src/Core domain/car-store/application/UseCase/order/getOrder/GetOrder";
import {GetOrders} from "../../src/Core domain/car-store/application/UseCase/order/getOrders/GetOrders";

describe('Order UseCase', ()=> {
    let id;
    let orderRepository;
    let orderResult;
    let ordersResult;
    beforeEach(async()=> {
        orderRepository = new InMemoryOrderRepository()
        const order = BuilderOrderInMemory.orderStubWhithId()
        await orderRepository.addOrder(order)
        const result = await orderRepository.getOrders()
        id = result[0][0]
        const getOrder = new GetOrder(orderRepository)
        const getOrders = new GetOrders(orderRepository)
        orderResult = await getOrder.execute(id)
        ordersResult = await getOrders.execute(id)
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
    it('should return array of order', async() => {
        const getOrders = new GetOrders(orderRepository)
        // @ts-ignore
        const result = await getOrders.execute()
        expect(result).toEqual(ordersResult)
    })
})