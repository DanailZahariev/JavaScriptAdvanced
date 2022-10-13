const carService = require('./CarService');
const {assert} = require('chai');

describe('Test CarService object', () => {
    describe('isItExpensive function test', () => {
        it('isItExpensive should return correct message if issue is engine or transmission ', function () {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`);
        });
        it('isItExpensive should return correct message otherwise ', function () {
            assert.equal(carService.isItExpensive('Tyres'), `The overall price will be a bit cheaper`);
            assert.equal(carService.isItExpensive('Headlight'), `The overall price will be a bit cheaper`);
            assert.equal(carService.isItExpensive('Windshield'), `The overall price will be a bit cheaper`);
        });
    });

    describe('discount function test', () => {
        it('should throw error with invalid params', function () {
            assert.throws(() => {
                carService.discount('3', 6)
            }, 'Invalid input');
            assert.throws(() => {
                carService.discount(5, '1')
            }, 'Invalid input');
            assert.throws(() => {
                carService.discount(3, [])
            }, 'Invalid input');
            assert.throws(() => {
                carService.discount({}, 2)
            }, 'Invalid input');
        });
        it('should return correct message when number of parts is lower than 2', function () {
            assert.equal(carService.discount(1, 8), 'You cannot apply a discount');
        });
        it('should return correct message for 15% discount', function () {
            assert.equal(carService.discount(3, 100), `Discount applied! You saved 15$`);
        });
        it('should return correct message for 30% discount ', function () {
            assert.equal(carService.discount(8, 100), `Discount applied! You saved 30$`);
        });
    });

    describe('partsToBuy function test', () => {
        it('should throw error when passing invalid param', function () {
            assert.throws(() => {
                assert.throws(carService.partsToBuy(3, 'part'), 'Invalid input');
                assert.throws(carService.partsToBuy('part', 3), 'Invalid input');
            });
        });
        it('should return 0 if catalog is empty', function () {
            assert.equal(carService.partsToBuy([], []), 0);
        });
        it('should return correct result', function () {
            let parts = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}];
            let neededParts = ['blowoff valve', 'coil springs'];

            assert.equal(carService.partsToBuy(parts, neededParts), 375);
            assert.equal(carService.partsToBuy(parts, ['coil springs']), 230);
        });
    });
});