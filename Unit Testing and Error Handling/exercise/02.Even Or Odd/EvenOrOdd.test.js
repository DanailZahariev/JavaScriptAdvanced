const isOddOrEven = require('./EvenOrOdd');
const {expect} = require('chai');

describe('Test for even or odd function', () => {

    it('should return undefined if input is not string', function () {

        expect(isOddOrEven(22)).to.be.undefined
        expect(isOddOrEven([])).to.be.undefined
        expect(isOddOrEven({})).to.be.undefined
        expect(isOddOrEven({name: 'pesho'})).to.be.undefined
    });

    it('should return even length', function () {
        expect(isOddOrEven('password')).to.be.equal('even');
        expect(isOddOrEven('love')).to.be.equal('even');

    });

    it('should return odd length', function () {

        expect(isOddOrEven('hello')).to.be.equal('odd');
        expect(isOddOrEven('noo')).to.be.equal('odd');

    });
})
