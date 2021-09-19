import {Utils} from "../../../common/Utils";

export class User {
    id: string
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly address: string,
        readonly email: string,
        readonly password: string){
        this.id = Utils.generateUniqueId()
    }
}