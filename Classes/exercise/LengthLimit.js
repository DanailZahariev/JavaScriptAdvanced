class Stringer {

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length);
    }

    decrease(length) {
        return this.innerLength = this.innerLength - length < 0 ? this.innerLength = 0 : this.innerLength - length;
    }

    increase(length) {
        return this.innerLength += length;
    }

    toString() {
        return this.innerLength >= this.innerString.length ? this.innerString
            : this.innerString.slice(0, this.innerLength) + '...';
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test