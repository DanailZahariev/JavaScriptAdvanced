const rentCar = require('./rentCar');
const {assert} = require('chai');

describe('Test retCar object', () => {
    describe('Test searchCar function', () => {
        it('should throw error with invalid input', function () {
            assert.throws(() => {
                rentCar.searchCar({}, 'A4');
            }, 'Invalid input!');
            assert.throws(() => {
                rentCar.searchCar([], 4);
            }, 'Invalid input!');
        });
        it('should throw error when there is not such model in the catalog', function () {
            assert.throws(() => {
                rentCar.searchCar(['A4', 'Octavia', 'Lada'], 'A8')
            }, 'There are no such models in the catalog!');
        });
        it('should return correct length and model', function () {
            assert.equal(rentCar.searchCar(['A4', 'Octavia', 'Lada'], 'Octavia'),
                'There is 1 car of model Octavia in the catalog!');
            assert.equal(rentCar.searchCar(['A4', 'Octavia', 'Lada', 'Lada'], 'Lada'),
                'There is 2 car of model Lada in the catalog!');
        });
    });
    describe('Test calculatePriceOfCar function', () => {
        it('should throw error with invalid input', function () {
            assert.throws(() => {
                rentCar.calculatePriceOfCar(4, 3)
            }, 'Invalid input!');
            assert.throws(() => {
                rentCar.calculatePriceOfCar('A4', '3')
            }, 'Invalid input!');
        });
        it('should throw error when there is no such model in the catalog', function () {
            assert.throws(() => {
                rentCar.calculatePriceOfCar('Lada', 3)
            }, 'No such model in the catalog!')
        });
        it('should return correct message when model is available', function () {
            assert.equal(rentCar.calculatePriceOfCar('Audi', 3),
                'You choose Audi and it will cost $108!');
        });
    });
    describe('Test checkBudget function', () => {
        it('should throw error with invalid input', function () {
            assert.throws(() => {
                rentCar.checkBudget('3', 2, 4);
            }, 'Invalid input!');
            assert.throws(() => {
                rentCar.checkBudget(3, '2', 4);
            }, 'Invalid input!');
            assert.throws(() => {
                rentCar.checkBudget(3, 2, '4');
            }, 'Invalid input!');
        });
        it('should return correct message when budged is low', function () {
            assert.equal(rentCar.checkBudget(20, 3, 50), 'You need a bigger budget!');
        });
        it('should return correct message when car is rent', function () {
            assert.equal(rentCar.checkBudget(20, 3, 60), 'You rent a car!');
        });
    });
});