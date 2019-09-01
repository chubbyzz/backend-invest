const factory = require('invest/__test__/factory');
const { Company } = require('invest/app/models');
const Util = require('invest/__test__/util');


describe('register', () => {
    beforeEach(async () => {
        await Util.resetDatabase();
    });
    it('should register a new company', async () => {
        await factory.create('Company');
        const records = await Company.count();
        expect(records).toBe(1);
    });
    it('sould not save company without code', async() => {
        await expect(factory.create('Company', {code: null})).rejects.toThrowError();  
    });
});