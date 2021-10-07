import {ICar} from "../../src/Core domain/car-store/Entities/Car";
// @ts-ignore
import {UserRepositoryBuilder} from "./UserRepositoryBuilder";


export class CarRepositoryBuilder {

    static carStub(ownerCar): ICar{
        return {
            name:'Audi_rs6',
            km: 1150,
            price: 50000,
            image: 'Audi_rs6.png',
            owner: ownerCar,
            available: true
        }
    }

    static carsStub(ownerCar): ICar[] {
        return [
            {
                name:'Audi_rs6',
                km: 1150,
                price: 50000,
                image: 'Audi_rs6.png',
                owner: ownerCar,
                available: true
            },
            {
                name:'Audi_rs7',
                km: 1150,
                price: 80000,
                image: 'Audi_rs7.png',
                owner: ownerCar,
                available: true
            },
            {
                name:'Audi_RSQ3',
                km: 1150,
                price: 80000,
                image: 'Audi_rsq3.png',
                owner: ownerCar,
                available: true
            }
        ]
    }
}