import {Utils} from "../../common/Utils";

export class User {
    id: string
    constructor(
        readonly firstName: string,
        readonly lastName: number,
        readonly address: number,
        readonly image: string,
        readonly owner: string){
        this.id = Utils.generateUniqueId()
    }
}