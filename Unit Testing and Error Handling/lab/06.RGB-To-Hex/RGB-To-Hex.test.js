const rgbToHexColor = require('./RGB-To-Hex');
const {expect} = require('chai');

describe('RGB to Hex color test', () => {

    it('should return undefined with invalid inputs', function () {

        expect(rgbToHexColor(3, 'Hello', 15)).to.be.undefined;
        expect(rgbToHexColor([22], {}, 15)).to.be.undefined;
        expect(rgbToHexColor(2.1, 3, 15)).to.be.undefined;
        expect(rgbToHexColor({myName: 'JS'}, 3, 15)).to.be.undefined;
    });

    it('should return undefined inputs are out of range', function () {

        expect(rgbToHexColor(-33, 15, 33)).to.be.undefined;
        expect(rgbToHexColor(23, -1, 44)).to.be.undefined;
        expect(rgbToHexColor(0, 1, 256)).to.be.undefined;

        expect(rgbToHexColor(0, 23, 256)).to.be.undefined;
        expect(rgbToHexColor(3, 256, 180)).to.be.undefined;
        expect(rgbToHexColor(3, 55, 256)).to.be.undefined;
    });

    it('should return correct hex when input is valid', function () {

        expect(rgbToHexColor(50, 155, 168)).to.be.equal('#329BA8');
        expect(rgbToHexColor(50, 56, 168)).to.be.equal('#3238A8');
        expect(rgbToHexColor(168, 89, 50)).to.be.equal('#A85932');
        expect(rgbToHexColor(168, 50, 50)).to.be.equal('#A83232');
        expect(rgbToHexColor(255, 0, 0)).to.be.equal('#FF0000');
        expect(rgbToHexColor(168, 166, 50)).to.be.equal('#A8A632');
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
})
