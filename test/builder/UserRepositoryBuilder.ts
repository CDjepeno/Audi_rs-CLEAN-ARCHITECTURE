import { Utils } from "../../src/eco/Core domain/common/Utils";
import {User} from "../../src/eco/Core domain/online store/Entities/VO/User";

export class UserRepositoryBuilder {

    static UserStub(): User{
        return new User('Dubois','Vincent','7 rue marche','vincent@gmail.com','elkarjlq')
    }

    UserStubList(): User[]{
        return [
            {
                firstName: 'Dubois',
                lastName: 'Vincent',
                address: '7 rue marcher',
                email: 'vincent@gmail.com',
                password: 'password',
                id: Utils.generateUniqueId()
            },
            {
                firstName: 'Pierre',
                lastName: 'Alain',
                address: '7 rue barbin',
                email: 'pierre@gmail.com',
                password: 'passfsdword',
                id: Utils.generateUniqueId()
            },
        ]
    };
}