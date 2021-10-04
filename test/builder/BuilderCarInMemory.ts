import {ICar} from "../../src/Core domain/online store/Entities/Car";
// @ts-ignore
import {UserRepositoryBuilder} from "./UserRepositoryBuilder";
import UserModel from "../../src/backend/models/userModel";


export class BuilderCarInMemory {

    static carStub(): ICar{
        const ownerCar= UserRepositoryBuilder.userStub()
        return {
            name:'Audi_rs6',
            km: 1150,
            price: 50000,
            image: 'Audi_rs6.png',
            owner: ownerCar.id,
            available: true
        }
    }

    static carsStub(): ICar[] {
        const ownerCar1= UserRepositoryBuilder.userStub()
        const ownerCar2= UserRepositoryBuilder.userStub()
        const ownerCar3= UserRepositoryBuilder.userStub()
        return [
            {
                name:'Audi_rs6',
                km: 1150,
                price: 50000,
                image: 'Audi_rs6.png',
                owner: ownerCar1.id,
                available: true
            },
            {
                name:'Audi_rs7',
                km: 1150,
                price: 80000,
                image: 'Audi_rs7.png',
                owner: ownerCar2.id,
                available: true
            },
            {
                name:'Audi_RSQ3',
                km: 1150,
                price: 80000,
                image: 'Audi_rsq3.png',
                owner: ownerCar3.id,
                available: true
            }
        ]
    }
}