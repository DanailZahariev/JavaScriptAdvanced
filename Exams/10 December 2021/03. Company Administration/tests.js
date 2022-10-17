const companyAdministration = require('./companyAdministration');
const {assert} = require('chai');

describe('Test companyAdministration functions', () => {
    describe('Test hiringEmployee functionality', () => {
        it('should throw error if position is not a programmer', function () {
            assert.throws(() => {
                    companyAdministration.hiringEmployee('pesho', 'Driver', 3)
                },
                'We are not looking for workers for this position.');
            assert.throws(() => {
                    companyAdministration.hiringEmployee('', '', 1)
                },
                'We are not looking for workers for this position.');
        });
        it('should return is not approved', function () {
            assert.equal(companyAdministration.hiringEmployee('pesho', 'Programmer', 2),
                'pesho is not approved for this position.');
        });
        it('should return approved', function () {
            assert.equal(companyAdministration.hiringEmployee('pesho', 'Programmer', 3),
                'pesho was successfully hired for the position Programmer.');
        });
    });
    describe('Test calculateSalary functionality', () => {
        it('should throw error with invalid params', function () {
            assert.throws(() => {
                companyAdministration.calculateSalary(-3)
            }, 'Invalid hours');
            assert.throws(() => {
                companyAdministration.calculateSalary('3')
            }, 'Invalid hours');
            assert.throws(() => {
                companyAdministration.calculateSalary({})
            }, 'Invalid hours');
            assert.throws(() => {
                companyAdministration.calculateSalary([])
            }, 'Invalid hours');
            assert.throws(() => {
                companyAdministration.calculateSalary(undefined)
            }, 'Invalid hours');
            assert.throws(() => {
                companyAdministration.calculateSalary('')
            }, 'Invalid hours');
        });
        it('should return correct totalAmount', function () {
            assert.equal(companyAdministration.calculateSalary(30), 450);
            assert.equal(companyAdministration.calculateSalary(30.5), 457.5);
            assert.equal(companyAdministration.calculateSalary(160), 2400);
            assert.equal(companyAdministration.calculateSalary(161), 3415);
        });
    });
    describe('Test firedEmployee functionality', () => {
        it('should throw error with invalid param', function () {
            assert.throws(() => {
                companyAdministration.firedEmployee('', 1)
            }, 'Invalid input');
            assert.throws(() => {
                companyAdministration.firedEmployee({}, 1)
            }, 'Invalid input');
            assert.throws(() => {
                companyAdministration.firedEmployee(undefined, 1)
            }, 'Invalid input');
            assert.throws(() => {
                companyAdministration.firedEmployee(true, 1)
            }, 'Invalid input');
            assert.throws(() => {
                companyAdministration.firedEmployee(1, 1)
            }, 'Invalid input');
            assert.throws(() => {
                companyAdministration.firedEmployee([], '')
            }, 'Invalid input');assert.throws(() => {
                companyAdministration.firedEmployee([], [])
            }, 'Invalid input');assert.throws(() => {
                companyAdministration.firedEmployee([], {})
            }, 'Invalid input');assert.throws(() => {
                companyAdministration.firedEmployee([], undefined)
            }, 'Invalid input');assert.throws(() => {
                companyAdministration.firedEmployee([], true)
            }, 'Invalid input');assert.throws(() => {
                companyAdministration.firedEmployee([], 1.4)
            }, 'Invalid input');assert.throws(() => {
                companyAdministration.firedEmployee([], -1)
            }, 'Invalid input');assert.throws(() => {
                companyAdministration.firedEmployee(['1','2','3'], 3)
            }, 'Invalid input');
        });
        it('should return correct employees', function () {
            assert.equal(companyAdministration.firedEmployee(['pesho', 'ivan', 'george'], 1), ['pesho, george']);
        });
    });
});