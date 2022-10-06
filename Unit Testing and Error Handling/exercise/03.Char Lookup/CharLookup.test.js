const lookupChar = require('./CharLookup');
const {expect} = require('chai');

describe('test for char look up functionality', () => {

    it('should return undefined when first argument is not a string', function () {

        expect(lookupChar(1,2)).to.be.undefined;
        expect(lookupChar(1.3,2)).to.be.undefined;
        expect(lookupChar({},3)).to.be.undefined;
        expect(lookupChar(['hello'],1)).to.be.undefined;
    });

    it('should return undefined when second argument is not a number', function () {

        expect(lookupChar('hello', '3')).to.be.undefined;
        expect(lookupChar('hello', [1])).to.be.undefined;
        expect(lookupChar('hello', 3.3)).to.be.undefined;
    });

    it('should return incorrect index ', function () {

        expect(lookupChar('hello', 5)).to.be.equal('Incorrect index');
        expect(lookupChar('hello', -2)).to.be.equal('Incorrect index');
        expect(lookupChar('hello', 8)).to.be.equal('Incorrect index');
    });

    it('should return the correct char when accessing it index', function () {

        expect(lookupChar('hello',0)).to.be.equal('h');
        expect(lookupChar('hello',4)).to.be.equal('o');
        expect(lookupChar('hello',2)).to.be.equal('l');
        expect(lookupChar('hello',1)).to.be.equal('e');
    });
})