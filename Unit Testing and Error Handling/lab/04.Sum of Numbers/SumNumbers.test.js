const sum = require('./SumNumbers');
const {expect} = require('chai');

describe('Test sum numbers', function () {

        it('should take array as argument ', function () {
            let args = [1, 2, 3];
            expect(args).to.be.an('array');
        });

        it('should return NaN when array contains invalid data', function () {
            expect(sum(['asd', 'bsd'])).to.be.NaN;
        });

        it('should should return correct sum of all elements', function () {
            expect(sum([1, 2, 3])).to.be.equal(6);
            expect(sum([120, 2, 3])).to.be.equal(125);
            expect(sum([-1, -2, -3])).to.be.equal(-6);
        });
    }
)