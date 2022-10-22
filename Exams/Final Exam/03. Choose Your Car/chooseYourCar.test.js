const chooseYourCar = require('./chooseYourCar');
const {assert} = require('chai');

describe('Test chooseYourCar object', () => {
    describe('Test choosingType function', () => {
        it('should throw error with invalid year input', function () {
            assert.throws(() => {
                chooseYourCar.choosingType('Sport', 'Green', 1899)
            }, 'Invalid Year!');
            assert.throws(() => {
                chooseYourCar.choosingType('Sport', 'Green', 2023)
            }, 'Invalid Year!');
        });
        it('should throw error when type != Sedan', function () {
            assert.throws(() => {
                chooseYourCar.choosingType('Sport', 'Green', 2000)
            }, 'This type of car is not what you are looking for.');
        });
        it('should return correct message when requirements are met', function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'Green', 2010), 'This Green Sedan meets the requirements, that you have.');
        });
        it('should return correct message when car is to old', function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'Green', 2009), 'This Sedan is too old for you, especially with that Green color.');
        });
    });
    describe('Test brandName function', () => {
        it('should throw error with invalid input', function () {
            assert.throws(() => {
                chooseYourCar.brandName({}, 2)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.brandName(undefined, 2)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.brandName('car', 2)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.brandName([], 2.3)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.brandName({}, -1)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.brandName(['Audi', 'Porsche'], 2)
            }, 'Invalid Information!');
        });
        it('should return correct array', function () {
            assert.equal(chooseYourCar.brandName(['Audi', 'Porsche', 'Mercedes-Benz'], 1), 'Audi, Mercedes-Benz');
        });
    });
    describe('Test carFuelConsumption function', () => {
        it('should throw error with invalid input', function () {
            assert.throws(() => {
                chooseYourCar.carFuelConsumption('3', 20)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(100, '3')
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(undefined, 20)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption({}, 20)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(100, {})
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(100, undefined)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption([], 20)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(100, [])
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(-1, 14)
            }, 'Invalid Information!');
            assert.throws(() => {
                chooseYourCar.carFuelConsumption(100, -1)
            }, 'Invalid Information!');
        });
        it('should return correct message when car is efficient', function () {
            assert.equal(chooseYourCar.carFuelConsumption(200, 14), 'The car is efficient enough, it burns 7.00 liters/100 km.');
            assert.equal(chooseYourCar.carFuelConsumption(250, 14), 'The car is efficient enough, it burns 5.60 liters/100 km.');
        });
        it('should return car is not efficient', function () {
            assert.equal(chooseYourCar.carFuelConsumption(200, 14.1), 'The car burns too much fuel - 7.05 liters!');
            assert.equal(chooseYourCar.carFuelConsumption(100, 15), 'The car burns too much fuel - 15.00 liters!');
        });
    });
});