function janNotation(inputArr) {

    let result = [];
    let nums = [];
    let operators = [];

    for (const element of inputArr) {
        if (typeof element == 'number') {
            nums.push(element);
        } else {
            operators.push(element);
        }
    }

    if (nums.length -1 > operators.length) {
        console.log("Error: too many operands!");
        return;
    } else if (operators.length >= nums.length) {
        console.log("Error: not enough operands!");
        return;
    }

    function executeOperation(num1, num2, element) {
        if (element === '+') {
            return num1 + num2;
        } else if (element === '-') {
            return num1 - num2;
        } else if (element === '/') {
            return num1 / num2;
        } else if (element === '*') {
            return num1 * num2;
        }
    }

    for (const element of inputArr) {
        if (typeof element == 'number') {
            result.push(element);
        } else {
            let num1 = result.pop();
            let num2 = result.pop();
            let current = executeOperation(num2, num1, element);
            result.push(current);
        }
    }
    console.log(result[0]);
}

// janNotation([7,
//     33,
//     8,
//     '-']);
//
// janNotation([15,
//     '/'])
//
// janNotation([5,
//     3,
//     4,
//     '*',
//     '-'])

janNotation([3, 4, '+']);

janNotation([7,
    33,
    8,
    '-'])