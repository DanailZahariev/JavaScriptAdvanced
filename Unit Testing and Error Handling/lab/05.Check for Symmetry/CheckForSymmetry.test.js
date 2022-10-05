const {expect} = require('chai');
const isSymmetric = require('./CheckForSymmetry');

describe('Test for symmetry', () => {

    it('should take array as argument', function () {

        expect(isSymmetric([])).to.true.true;
    });

    it('should return false with incorrect input', function () {

        expect(isSymmetric(6)).to.be.false;
        expect(isSymmetric('hello')).to.be.false;
        expect(isSymmetric(6.6)).to.be.false;
        expect(isSymmetric({})).to.be.false;
    });

    it('should return true if array is symetric', function () {

        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should return false when array is not symetric', function () {

        expect(isSymmetric([1, 2, 1, 2])).to.be.false;
        expect(isSymmetric([1, 3, 1, 2])).to.be.false;
        expect(isSymmetric([1, 4, '1', 2, 8])).to.be.false;
    });

    it('should return false with mixed type array', function () {

        expect(isSymmetric([1, 2, '2', 1])).to.be.false;
    });
});