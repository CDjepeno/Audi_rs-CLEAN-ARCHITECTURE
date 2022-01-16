
export interface IUser {
    id?: number,
    firstname: string,
    lastname: string,
    email: string,
    address: string,
    password: string
}

export class User implements IUser {
    id?: number
    constructor(
        readonly firstname: string,
        readonly lastname: string,
        readonly address: string,
        readonly email: string,
        readonly password: string){ }
}