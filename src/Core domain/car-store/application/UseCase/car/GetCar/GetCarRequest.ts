export class GetCarRequest {
    constructor(readonly id: number,
                readonly name: string,
                readonly km: number,
                readonly price: number,
                readonly image: string,
                readonly owner: string,
                readonly available: boolean
                ){}
}

