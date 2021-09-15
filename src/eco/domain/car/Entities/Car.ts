import {Utils} from "../../common/Utils";
import {User} from "./User";

export class Car {
    id: string
    available: boolean
    constructor(
        readonly name: string,
        readonly km: number,
        readonly price: number,
        readonly image: string,
        readonly owner: User){
        this.id = Utils.generateUniqueId()
        this.available = true
    }
}