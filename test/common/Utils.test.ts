import {Utils} from "../../src/Core domain/common/Utils";

describe('Utils class', () => {
    it('should be return random string', () => {
        const response = Utils.generateUniqueId()

        expect(typeof response).toBe('string')
    })
})