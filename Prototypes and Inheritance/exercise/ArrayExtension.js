(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        let sum = 0;
        this.forEach(x => sum += x);
        return sum;
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };

})();

let arr = [10, 10, 12];
console.log(arr.average())