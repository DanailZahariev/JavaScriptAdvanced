aggregateElements = (arr) => {

    const numbers = arr.map(Number);

    const sum = numbers.reduce((a, b) => a + b);
    const inverse = numbers.reduce((a, b) => a + 1 / b, 0);
    const concat = numbers.join('');

    console.log(sum);
    console.log(inverse);
    console.log(concat);

}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])