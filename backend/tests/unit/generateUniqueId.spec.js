const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should sum', () => {
        expect(2 + 2).toBe(4);
    });
    it('should generate an unique ID', () => {
        const id = generateUniqueId()

        expect(id).toHaveLength(8);
    });
});