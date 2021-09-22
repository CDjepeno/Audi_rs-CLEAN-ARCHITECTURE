import {Utils} from "../../../common/Utils";
import {IUser} from "./User";

export interface ICar {
    id?: string,
    name: string,
    km: number,
    price: number,
    image: string,
    owner: IUser,
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
        readonly owner: IUser)
    {
        this.id = Utils.generateUniqueId()
        this.available = true
    }
}