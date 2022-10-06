function add(num) {
    let sum = num;

    function sumNums(nextSum) {
        sum += nextSum;
        return sumNums;
    }

    sumNums.toString = () => {
        return sum;
    };

    return sumNums;
}

console.log(add(1)(6)(-3).toString());
console.log(add(1).toString());
