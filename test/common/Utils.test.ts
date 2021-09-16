import {Utils} from "../../src/eco/Core domain/common/Utils";

describe('Utils class', () => {
    it('should be return random string', () => {
        const response = Utils.generateUniqueId()

        expect(typeof response).toBe('string')
    })
})