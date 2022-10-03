function solve(num) {
    function add(num1, num2) {
        return num1 + num2;
    }
    return add.bind(this, num)
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));