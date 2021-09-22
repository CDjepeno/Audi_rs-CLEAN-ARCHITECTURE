import {createUser} from "../../src/backend/services/userService";
// @ts-ignore
import {UserRepositoryBuilder} from "../builder/UserRepositoryBuilder";

describe('Test UserService module', () => {
    it('createUser Test', () => {
        const user = UserRepositoryBuilder.userStub()
        const result = createUser(user)
        expect(result).toBe('done')
    })
})