const StringBuilder = require("./StringBuilder");
const {assert} = require('chai');
const {expect} = require('chai');

describe('Test StringBuilder class functionality', () => {
    describe('Test constructor', () => {

        it('should work properly when correct argument is passed', function () {
            const stringBuilder = new StringBuilder('hello');
            assert.equal(stringBuilder.toString(), 'hello');
            assert.equal(stringBuilder._stringArray.length, 0);
            assert.equal(typeof (stringBuilder), 'object');
        });

        it('should work properly with valid data', function () {
            const stringBuilder = new StringBuilder('text');
            assert.equal(stringBuilder.toString(), 'text');
            assert.equal(stringBuilder._stringArray.length, 4);
        });

        it('should return empty array with undefined', function () {
            const stringBuilder = new StringBuilder(undefined);
            expect(stringBuilder._stringArray).to.deep.equal([]);
        });
    });

    describe('_vrfyParam function', () => {
        it('should throw error with invalid params', function () {
            assert.throws(() => {
                new StringBuilder([])
            }, 'Argument must be a string');
            assert.throws(() => {
                new StringBuilder(1)
            }, 'Argument must be a string');
            assert.throws(() => {
                new StringBuilder({})
            }, 'Argument must be a string');
            assert.throws(() => {
                new StringBuilder(true)
            }, 'Argument must be a string');
        });
    });

    describe('Test append function', () => {
        it('should throw error when invalid param is passed', function () {
            let stringBuilder = new StringBuilder();

            assert.throws(() => {
                stringBuilder.append(12)
            }, 'Argument must be a string');
            assert.throws(() => {
                stringBuilder.append([])
            }, 'Argument must be a string');
            assert.throws(() => {
                stringBuilder.append(false)
            }, 'Argument must be a string');
        });

        it('should work correctly with valid param', function () {
            let stringBuilder = new StringBuilder('Hello');
            stringBuilder.append(' world')
            assert.equal(stringBuilder.toString(), 'Hello world');
            stringBuilder.append('!');
            assert.equal(stringBuilder.toString(), 'Hello world!');
        });
    });

    describe('Test prepend function', () => {
        it('should throw error with invalid param', function () {
            let stringBuilder = new StringBuilder();

            assert.throws(() => {
                stringBuilder.prepend(12)
            }, 'Argument must be a string');
            assert.throws(() => {
                stringBuilder.prepend([])
            }, 'Argument must be a string');
            assert.throws(() => {
                stringBuilder.prepend(false)
            }, 'Argument must be a string');
        });

        it('should work correctly with valid param', function () {
            let stringBuilder = new StringBuilder('Hello');
            stringBuilder.prepend('world ')
            assert.equal(stringBuilder.toString(), 'world Hello');
            stringBuilder.prepend('!');
            assert.equal(stringBuilder.toString(), '!world Hello');
        });
    });

    describe('Test insertAt function', () => {
        it('should throw error with invalid param', function () {
            let stringBuilder = new StringBuilder();

            assert.throws(() => {
                stringBuilder.insertAt(12, 1)
            }, 'Argument must be a string');
            assert.throws(() => {
                stringBuilder.append([], 2)
            }, 'Argument must be a string');
            assert.throws(() => {
                stringBuilder.append(false, 3)
            }, 'Argument must be a string');
        });

        it('should insert string at given index', function () {
            let stringBuilder = new StringBuilder('hello');
            stringBuilder.insertAt(' world', 5);
            assert.equal(stringBuilder.toString(), 'hello world')
        });
    });

    describe('Test remove function', () => {
        it('should work correctly ', function () {
            let stringBuilder = new StringBuilder('hello');
            stringBuilder.remove(0, 2);
            assert.equal(stringBuilder.toString(), 'llo');
            stringBuilder.remove(1, 1);
            assert.equal(stringBuilder.toString(), 'lo');
        });
    });

    describe('Test the whole functionality', () => {
        it('should append, prepend, append at given index and remove', () => {
            const obj = new StringBuilder('java');
            obj.append('script');
            obj.prepend('is');
            obj.insertAt('123', 2);
            obj.remove(3, 5);
            assert.equal(obj.toString(),'is1ascript');
        });
    });
});