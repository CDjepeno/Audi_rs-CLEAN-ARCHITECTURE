
export interface ICar {
    id?: number,
    name: string,
    km: number,
    price: number,
    image: string,
    ownerId: number,
    available: boolean
}

export class Car implements ICar{
    id?: number
    available: boolean
    constructor(
        readonly name: string,
        readonly km: number,
        readonly price: number,
        readonly image: string,
        readonly ownerId: number)
    {
        this.available = true
    }

    changeAvailable(b: boolean) {
        if(this.available) {
            this.available = b
        }
    }
}