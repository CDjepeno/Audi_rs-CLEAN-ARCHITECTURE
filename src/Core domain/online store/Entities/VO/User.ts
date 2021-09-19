import {Utils} from "../../../common/Utils";

export interface IUser {
    id?: string,
    firstName: string,
    lastName: string,
    address: string,
    password: string
}

export class User implements IUser {
    id?: string
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly address: string,
        readonly email: string,
        readonly password: string){
        this.id = Utils.generateUniqueId()
    }
}