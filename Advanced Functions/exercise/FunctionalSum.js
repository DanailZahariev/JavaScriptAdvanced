function add(num) {
    let sum = 0;

    function sumNums(nextSum) {
        sum += nextSum;
        return sumNums;
    }

    sumNums.toString = () => {
        return sum;
    };

    return sumNums(num);
}

console.log(add(1)(6)(-3).toString());
