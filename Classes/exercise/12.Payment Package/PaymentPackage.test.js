const PaymentPackage = require('./PaymentPackage');
const {assert} = require('chai');

describe('Test PaymentPackage class functionality', () => {

    describe('Create a new instance', () => {

        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage('Dani', 10);
        });

        it('name should be correct', function () {
            assert.equal(paymentPackage._name, 'Dani', 'Correct name should be Dani');
            assert.equal(typeof (paymentPackage._name), 'string', 'Name has correct type');
        });

        it('value should correct', function () {
            assert.equal(paymentPackage._value, 10, 'Correct value should be 10');
            assert.equal(typeof (paymentPackage._value), 'number', 'Value has correct type');
            paymentPackage.value = 0;
            assert.equal(paymentPackage.value, 0);
        });

        it('VAT should be correct set to 20', function () {
            assert.equal(paymentPackage._VAT, 20, 'VAT should be set to 20');
            assert.equal(typeof (paymentPackage._VAT), 'number', 'VAT has correct type');
            paymentPackage.VAT = 0;
            assert.equal(paymentPackage.VAT, 0);
        });

        it('Active should set to true when creating new instance', function () {
            assert.equal(paymentPackage._active, true, 'Active should return true');
            assert.equal(typeof (paymentPackage._active), 'boolean', 'Active has correct type');
        });
    });

    describe('Test setters functionality', () => {

        it('should throw error with incorrect name', function () {
            assert.throws(() => {
                new PaymentPackage(10, 10)
            }, 'Name must be a non-empty string');
            assert.throws(() => {
                new PaymentPackage("", 10)
            }, 'Name must be a non-empty string');
        });

        it('should throw error when number is negative or different type', function () {
            assert.throws(() => {
                new PaymentPackage('Dani', -1)
            }, 'Value must be a non-negative number');
            assert.throws(() => {
                new PaymentPackage('Dani', "str")
            }, 'Value must be a non-negative number');
        });

        it('should throw error when VAT is negative or different type', function () {

            let test = new PaymentPackage('dani', 10);
            assert.throws(() => {
                test.VAT = -1
            }, 'VAT must be a non-negative number');
            assert.throws(() => {
                test.VAT = "str"
            }, 'VAT must be a non-negative number');
        });

        it('should throw error when setting non-boolean value', function () {

            let test = new PaymentPackage('dani', 10);
            assert.throws(() => {
                test.active = 'str'
            }, 'Active status must be a boolean');
        });
    });

    describe('Test toString functionality', () => {

        let paymentPackage;

        beforeEach(() => {
            paymentPackage = new PaymentPackage('Dani', 10);
        });

        it('test active', function () {
            const output = [`Package: Dani`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`].join('\n');

            assert.equal(paymentPackage.toString(), output,);
        });

        it('should not active', function () {

            paymentPackage.active = false;

            const output = [`Package: Dani (inactive)`,
                `- Value (excl. VAT): 10`,
                `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`].join('\n');

            assert.equal(paymentPackage.toString(), output,);
        });
    });
});