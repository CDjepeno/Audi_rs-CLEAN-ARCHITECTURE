import {IUser} from "../../../../Entities/VO/User";

export class AddCarRequest {
    constructor(readonly id: string,
                readonly name: string,
                readonly km: number,
                readonly price: number,
                readonly image: string,
                readonly owner: IUser,
                readonly available: boolean
                ){}
}

