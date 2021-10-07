export class DeleteUsersRequest {
    constructor(readonly id: string,
                readonly name: string,
                readonly km: number,
                readonly price: number,
                readonly image: string,
                readonly owner: string,
                readonly available: boolean
                ){}
}

