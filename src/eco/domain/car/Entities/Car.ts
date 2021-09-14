import {Utils} from "../../common/Utils";
import {BaseEntity} from "../../common/BaseEntity";

export class Car {
    id: string
    available: boolean
    constructor(
        readonly name: string,
        readonly km: number,
        readonly price: number,
        readonly image: string,
        readonly owner: string) {
        this.id = Utils.generateUniqueId()
        this.available = true
    }
}