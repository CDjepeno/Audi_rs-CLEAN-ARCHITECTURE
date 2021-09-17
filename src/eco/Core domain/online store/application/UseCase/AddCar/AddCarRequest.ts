import {User} from "../../../Entities/VO/User";

export class AddCarRequest {
    constructor(readonly id: string,
                readonly name: string,
                readonly km: number,
                readonly price: number,
                readonly image: string,
                readonly owner: User,
                readonly available: boolean
                ){}
}

