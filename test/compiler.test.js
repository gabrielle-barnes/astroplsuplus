import assert from 'assert/strict';

describe('Equality Test', () => {
    it("should return true when comparing 1 to 1", () => {
        assert.strictEqual(1 === 1, true);
    });
});