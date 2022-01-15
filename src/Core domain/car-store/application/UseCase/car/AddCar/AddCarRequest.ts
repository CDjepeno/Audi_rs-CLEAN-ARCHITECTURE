export class AddCarRequest {
    constructor(readonly id: string,
                readonly name: string,
                readonly km: number,
                readonly price: number,
                readonly image: string,
                readonly owner: number,
                readonly available: boolean
                ){}
}

