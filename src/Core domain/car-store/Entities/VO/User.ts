import {Utils} from "../../../common/Utils";

export interface IUser {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    password: string
}

export class User implements IUser {
    id?: number
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly address: string,
        readonly email: string,
        readonly password: string){ }
}