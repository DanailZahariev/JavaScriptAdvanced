const mathEnforcer = require('./MathEnforcer');
const {expect} = require('chai');

describe('Test for Math Enforcer functionality', () => {

    describe('addFive', () => {

        it('should return undefined with non-number parameter', function () {

            expect(mathEnforcer.addFive('hi')).to.be.undefined;
            expect(mathEnforcer.addFive([3])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        it('should return correct input when adding', function () {

            expect(mathEnforcer.addFive(10)).to.be.equal(15);
            expect(mathEnforcer.addFive(16)).to.be.equal(21);
            expect(mathEnforcer.addFive(1.1)).to.be.equal(6.1);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
    });

    describe('subtractTen', () => {

        it('should return undefined with non-number parameter', function () {

            expect(mathEnforcer.subtractTen('hi')).to.be.undefined;
            expect(mathEnforcer.subtractTen([5])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });

        it('should return correct input when subtract', function () {

            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
            expect(mathEnforcer.subtractTen(-20)).to.be.equal(-30);
            expect(mathEnforcer.subtractTen(-3.3)).to.be.equal(-13.3);
        });
    });

    describe('sum', () => {

        it('should return undefined with non-number parameter', function () {

            expect(mathEnforcer.sum([], 2)).to.be.undefined;
            expect(mathEnforcer.sum(1, '22')).to.be.undefined;
            expect(mathEnforcer.sum({}, 3)).to.be.undefined;
            expect(mathEnforcer.sum(true, 2)).to.be.undefined;
            expect(mathEnforcer.sum("hello", 'yes')).to.be.undefined;
        });

        it('should return correct input when sum', function () {

            expect(mathEnforcer.sum(10, 10)).to.equal(20);
            expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
            expect(mathEnforcer.sum(12.5, 12.5)).to.equal(25);
            expect(mathEnforcer.sum(12.5, 3)).to.equal(15.5);
        });
    });
})