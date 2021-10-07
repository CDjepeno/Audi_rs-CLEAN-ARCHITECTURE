import {Utils} from "../../common/Utils";

export interface ICar {
    id?: string,
    name: string,
    km: number,
    price: number,
    image: string,
    owner: string,
    available: boolean
}

export class Car implements ICar{
    id?: string
    available: boolean
    constructor(
        readonly name: string,
        readonly km: number,
        readonly price: number,
        readonly image: string,
        readonly owner: string)
    {
        this.id = Utils.generateUniqueId()
        this.available = true
    }

    changeAvailable(b: boolean) {
        if(this.available) {
            this.available = b
        }
    }
}