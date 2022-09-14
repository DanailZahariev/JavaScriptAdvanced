function arrayWithGivenDelimiter(arr, delimiter) {

    console.log(arr.join(delimiter))
}

arrayWithGivenDelimiter(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-')
arrayWithGivenDelimiter(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_')


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

function addAndRemoveElements(commands) {

    let initialValue = 1;
    let arr = [];

    for (let i = 0; i < commands.length; i++) {

        if (commands[i] === 'add') {
            arr.push(initialValue);

        } else if (commands[i] === 'remove') {
            arr.pop();
        }
        initialValue++;
    }
    if (arr.length === 0) {
        console.log('Empty');
        return;
    }
    for (const element of arr) {
        console.log(element);
    }
}


addAndRemoveElements(['add',
    'add',
    'add',
    'add'])

addAndRemoveElements(['remove',
    'remove',
    'remove'])

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])


function rotateArray(arr, number) {

    for (let i = 0; i < number; i++) {
      arr.unshift(arr.pop());
    }
    console.log(arr.join(' '))
}

rotateArray(['1',
        '2',
        '3',
        '4'],
    2)

rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15)

function extractIncreasingSubsequenceFromArray(arr) {

    let finalArr = [arr[0]];

    arr.reduce((a, b) => {
        if (b >= finalArr[finalArr.length - 1]) {
            finalArr.push(b);
        }
    });
    return finalArr;
}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]))


function listOfNames(arr) {

    arr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i+1}.${arr[i]}`)
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])


function sortingNumbers(arr) {

    let result = [];
    arr.sort((a, b) => a - b);

    while (arr.length > 0) {

        result.push(arr.shift());

        if (arr.length > 0) {
            result.push(arr.pop());
        }
    }
    return result;
}


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))


function sortAnArrayBy2Criteria(arr = []) {

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    for (const word of arr) {
        console.log(word)
    }
}

sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma'])


function magicMatrices(matrix = []) {

    let isMagic = false;
    let lastSum = 0;

    for (let i = 0; i < matrix.length -1; i++) {
        let sum = matrix[i].map(Number).reduce((a, b) => a + b, 0);
        if (sum === lastSum && i !== 0) {
            isMagic = true;
        }
        lastSum = sum;
    }
    console.log(isMagic);
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])



