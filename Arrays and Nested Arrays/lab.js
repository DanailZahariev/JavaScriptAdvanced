function evenPositionElement(arr) {

    let result = '';

    for (let i = 0; i < arr.length; i += 2) {

        result += arr[i];
        result += ' ';
    }

    console.log(result)
}

evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement(['5', '10'])


function lastKNumbers(n, k) {

    let arr = [1];

    for (let i = 1; i < n; i++) {

        let sum = 0;

        let startIndex = Math.max(0, i - k);

        for (let j = startIndex; j < i; j++) {

            sum += arr[j];
        }

        arr[i] = sum;
    }

    return arr;
}

console.log(lastKNumbers(6, 3))
console.log(lastKNumbers(8, 2))


function sumFirstAndLast(arr) {

    let lastElement = arr.pop();
    let firstElement = arr.shift();
    let lastNumber = Number(lastElement);
    let firstNumber = Number(firstElement);
    let sum = firstNumber + lastNumber;

    console.log(sum)

}

sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])


function negativeAndPositiveNums(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    console.log(result.join('\n'));
}

negativeAndPositiveNums([7, -2, 8, 9])
negativeAndPositiveNums([3, -2, 0, -1])


function smallestTwoNumbers(arr) {

    let result = arr.sort((a, b) => a - b).slice(0, 2);

    console.log(result.join(' '))
}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])


function biggerHalf(arr) {

    arr.sort((a, b) => a - b);
    const middle = Math.floor(arr.length / 2);
    return arr.slice(middle);
}

console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))

function pieceOfPie(pies, startFlavour, endFlavour) {

    const start = pies.indexOf(startFlavour);
    const end = pies.indexOf(endFlavour) + 1;

    return pies.slice(start, end);
}

console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))

function oddPositions(arr) {
    return arr.filter((a, i) => i % 2 === 1)
        .map(x => x * 2).reverse().join(' ');
}


console.log(oddPositions([10, 15, 20, 25]))
console.log(oddPositions([3, 0, 10, 4, 7, 3]))

function biggestElement(matrix) {

    let result = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length + 1; j++) {
            if (matrix[i][j] > result) {
                result = matrix[i][j];
            }
        }
    }
    console.log(result)
}

biggestElement([[20, 50, 10],
    [8, 33, 145]])
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])


function diagonalSum(matrix) {

    let first = 0;
    let second = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    matrix.forEach(arr => {

        first += arr[firstIndex++];
        second += arr[secondIndex--];
    });

    console.log(first + ' ' + second);
}

diagonalSum([[20, 40],
    [10, 60]])
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])


function equalNeighbors(matrix) {

    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === matrix.length - 1) {
                if (matrix[i][j] === matrix[i][j + 1]) {
                    result++;
                }
            } else {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    result++;
                }
                if (matrix[i][j] === matrix[i][j + 1]) {
                    result++;
                }
            }
        }
    }

    return result;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]))

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]))