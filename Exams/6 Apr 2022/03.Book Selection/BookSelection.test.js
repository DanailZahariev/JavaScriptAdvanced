const bookSelection = require('./BookSelection');
const {assert} = require('chai');

describe('Test BookSelection object', () => {
    describe('Test isGenreSuitable function', () => {
        it('should return correct message with invalid params', function () {
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it('should return correct message with valid params', function () {
            assert.equal(bookSelection.isGenreSuitable('Story', 11), 'Those books are suitable');
            assert.equal(bookSelection.isGenreSuitable('Fairytale', 12), 'Those books are suitable');
            assert.equal(bookSelection.isGenreSuitable('Horror', 13), 'Those books are suitable');
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13), 'Those books are suitable');
        });
    });
    describe('Test isItAffordable function', () => {
        it('should throw error with non-number params', function () {
            assert.throws(() => {
                bookSelection.isItAffordable('3', 12)
            }, 'Invalid input');
            assert.throws(() => {
                bookSelection.isItAffordable(15, '12')
            }, 'Invalid input');
            assert.throws(() => {
                bookSelection.isItAffordable({}, 12)
            }, 'Invalid input');
        });
        it('should return correct message if result is below 0', function () {
            assert.equal(bookSelection.isItAffordable(12, 11), 'You don\'t have enough money');
            assert.equal(bookSelection.isItAffordable(12, 10), 'You don\'t have enough money');
        });

        it('should return correct message with money left', function () {
            assert.equal(bookSelection.isItAffordable(10, 15), 'Book bought. You have 5$ left');
            assert.equal(bookSelection.isItAffordable(10, 11), 'Book bought. You have 1$ left');
            assert.equal(bookSelection.isItAffordable(10, 10.50), 'Book bought. You have 0.5$ left');
        });
    });
    describe('Test suitableTitles function', () => {
        it('should throw error when first param is not array', function () {
            assert.throws(() => {
                bookSelection.suitableTitles({}, 'Horror')
            }, 'Invalid input');
        });
        it('should throw error when second param is not a string', function () {
            assert.throws(() => {
                bookSelection.suitableTitles([{title: "The Da Vinci Code", genre: "Thriller"}], 2)
            }, 'Invalid input');
        });
        it('should return correct result array', function () {
            let wanted = [{title: "The Da Vinci Code", genre: "Thriller"},
                {title: "Napoleon Hill Outwitting the Devil", genre: "Success Self-Help"},
                {title: "The Da Vinci Code 2", genre: "Thriller"}];

            let wantedBook = 'Thriller';
            let wantedBook2 = 'Success Self-Help';
            let wantedBook3 = 'Story';

            assert.deepEqual(bookSelection.suitableTitles(wanted, wantedBook3), []);
            assert.deepEqual(bookSelection.suitableTitles(wanted, wantedBook2), ['Napoleon Hill Outwitting the Devil']);
            assert.deepEqual(bookSelection.suitableTitles(wanted, wantedBook), ['The Da Vinci Code','The Da Vinci Code 2']);

        });
    });
});
