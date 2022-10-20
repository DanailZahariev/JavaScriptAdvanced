const flowerShop = require('./flowerShop');
const {assert} = require('chai');

describe('Test FlowerShop object', () => {
    describe('Test calcPriceOfFlowers function', () => {
        it('should throw error when invalid params are passed', () => {
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers(3, 3, 3)
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers('rose', '3', 3)
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers('rose', 3, '3')
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.calcPriceOfFlowers('rose', '3', '3')
            }, 'Invalid input!');
        });
        it('should return correct value when valid params are passed', () => {
            assert.equal(flowerShop.calcPriceOfFlowers('rose', 3, 3),
                'You need $9.00 to buy rose!');
            assert.equal(flowerShop.calcPriceOfFlowers('rose', 10, 3),
                'You need $30.00 to buy rose!');
        });
    });
    describe('Test checkFlowersAvailable function', () => {
        let garden = ['rose', 'tulip', 'orchid'];
        it('should return flower not available', function () {
            assert.equal(flowerShop.checkFlowersAvailable('lily', garden),
                'The lily are sold! You need to purchase more!');
        });
        it('should return flower is available', function () {
            assert.equal(flowerShop.checkFlowersAvailable('rose', garden),
                'The rose are available!');
        });
    });
    describe('Test sellFlowers function', () => {
        let garden = ['rose', 'tulip', 'orchid'];
        it('should throw error when invalid params are passed', function () {
            assert.throws(() => {
                flowerShop.sellFlowers({}, 3)
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.sellFlowers('rose', 3)
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.sellFlowers(undefined, 3)
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.sellFlowers(garden, '3')
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.sellFlowers(garden, [])
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.sellFlowers(garden, {})
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.sellFlowers(garden, -1)
            }, 'Invalid input!');
            assert.throws(() => {
                flowerShop.sellFlowers(garden, 4)
            }, 'Invalid input!');
        });
        it('should return correct output', function () {
            assert.equal(flowerShop.sellFlowers(garden, 1), 'rose / orchid');

        });
    });
});