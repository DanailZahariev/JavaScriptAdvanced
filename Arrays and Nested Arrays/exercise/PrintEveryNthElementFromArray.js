function printEveryNthElementInArray(arr, n) {

    let result = [];

    for (let i = 0; i < arr.length; i+=n) {
        result.push(arr[i])

    }

    return result;
}

console.log(printEveryNthElementInArray(['5',
        '20',
        '31',
        '4',
        '20'],
    2));
console.log(printEveryNthElementInArray(['dsa',
        'asd',
        'test',
        'tset'],
    2));
console.log(printEveryNthElementInArray(['1',
        '2',
        '3',
        '4',
        '5'],
    6));