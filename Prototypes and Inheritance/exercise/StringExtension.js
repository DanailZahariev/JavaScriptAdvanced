(function solve() {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this.toString() + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return '.'.repeat(n);
        }

        if (this.toString().length <= n) {
            return this.toString();

        } else {
            let lastIndex = this.substring(0, n - 2).lastIndexOf(' ');
            if (lastIndex !== -1) {
                return this.substring(0, lastIndex) + '...';
            } else {
                return this.substring(0, n - 3) + '...';
            }
        }
    };

    String.format = function (string, ...params) {
        params.forEach((p, index) => {
            string = string.replace(`{${index}}`, p);
        });
        return string;
    };

})();

let str = 'hello my string';
console.log(str.truncate(9))