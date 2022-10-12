const {assert} = require('chai');
const cinema = require('./cinema');

describe('Test Cinema class functionality', function () {
    describe('showMovies function', function () {
        it('should return a message when is empty', function () {

            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');
        });
        it('should return the correct result with movies inside the array', function () {

            assert.equal(cinema.showMovies(['Spider-Man', 'The Witcher', 'Breaking Bad']), 'Spider-Man, The Witcher, Breaking Bad');
        });
    });

    describe('ticketPrice function', function () {
        it('should throw Error with invalid projectionType', function () {

            assert.throws(() => {
                cinema.ticketPrice('asd')
            }, 'Invalid projection type.');
        });
        it('should return the correct price of projectionType', function () {

            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
            assert.equal(cinema.ticketPrice('Discount'), 5.50);
        });
    });

    describe('swapSeatsInHall function', function () {
        it('should return message with invalid change of seats with non-integer param', function () {

            assert.equal(cinema.swapSeatsInHall(1, '3'), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, 0), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, -12), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, 21), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, 5.5), 'Unsuccessful change of seats in the hall.');

            assert.equal(cinema.swapSeatsInHall('3', 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(0, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(1, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-12, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(21, 1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5.5, 1), 'Unsuccessful change of seats in the hall.');
        });
        it('should swap seats with valid params', function () {

            assert.equal(cinema.swapSeatsInHall(1,2),'Successful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(12,20),'Successful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(3,4),'Successful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(19,3),'Successful change of seats in the hall.');
        });
    });
});