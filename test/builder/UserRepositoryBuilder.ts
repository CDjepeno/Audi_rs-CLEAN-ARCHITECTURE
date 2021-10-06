// @ts-ignore
import {Utils} from "../../src/Core domain/common/Utils";
import {IUser} from "../../src/Core domain/online-store/Entities/VO/User";

// @ts-ignore
export class UserRepositoryBuilder {

    static userStub(): IUser{
        return {
            firstName: "Vaught",
            lastName: "Vernon",
            address: "7 rue de la paix, paris 75017",
            email: "vernon@gmail.com",
            password: "password"
        }
    }

    static usersStub(): IUser[] {
        return [
            {
                firstName: "Vaught",
                lastName: "Vernon",
                address: "7 rue de la paix, paris 75017",
                email: "vernon@gmail.com",
                password: "password"
            },
            {
                firstName: "Eric",
                lastName: "Evans",
                address: "70 avenue marceau, paris 75007",
                email: "evans@gmail.com",
                password: "password"
            },
            {
                firstName: "Martins",
                lastName: "Fowler",
                address: "7 rue de la république, paris 75011",
                email: "fowler@gmail.com",
                password: "password"
            }
        ]
    }

}

