const createCalculator = require('./AddSubtract');
const {expect} = require('mocha');

describe('Add and Subtract test', () => {

    it('should return an object', function () {

        expect(typeof createCalculator()).to.be.equal("object");
    });

    it('should return an object with functions as properties', () => {
        let calc = createCalculator();
        expect(calc).haveOwnProperty('add');
        expect(calc).haveOwnProperty('subtract');
        expect(calc).haveOwnProperty('get');
    });

    it('should add number to internal sum', function () {

        let calc = createCalculator();
        calc.add(3);
        expect(calc.get()).to.equal(3);
        calc.add('3');
        expect(calc.get()).to.equal(6);
    });

    it('should subtract number to internal sum', function () {

        let calc = createCalculator();
        calc.add(3);
        calc.subtract(2)
        expect(calc.get()).to.equal(1);
        calc.add('3');
        expect(calc.get()).to.equal(4);
    });
})