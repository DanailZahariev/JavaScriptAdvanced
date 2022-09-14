function stringLength(name) {
    console.log(name.length)
    console.log(name)
}

stringLength("Hello, JavaScript!")
stringLength("strings are easy")

function stringSum(str1, str2, stt3) {
    let sumOfStrings = str1.length + str2.length + stt3.length
    let averageLength = Math.floor(sumOfStrings / 3)
    console.log(sumOfStrings)
    console.log(averageLength)
}

stringSum('chocolate', 'ice cream', 'cake')
stringSum('pasta', '5', '22.3')


function largestNumber(num1, num2, num3) {
    console.log(`The largest number is ${Math.max(num1, num2, num3)}.`)
}

largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)


function circleArea(num) {

    let result;
    let inputType = typeof (num);

    if (inputType === 'number') {
        result = Math.pow(num, 2) * Math.PI;
        console.log(result.toFixed(2));

    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

circleArea(5)
circleArea('name')

function mathOperations(num1, num2, operator) {

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
    }
    console.log(result)
}

mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')

function sumOfNumbers(n, m) {

    let number1 = Number(n);
    let number2 = Number(m);
    let result = 0;

    for (let i = number1; i <= number2; i++) {
        result += i;
    }
    console.log(result)
}

sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')

function dayOfWeek(day) {

    switch (day) {
        case "Monday":
            console.log(1);
            break;
        case "Tuesday":
            console.log(2);
            break;
        case "Wednesday":
            console.log(3);
            break;
        case "Thursday":
            console.log(4);
            break;
        case "Friday":
            console.log(5);
            break;
        case "Saturday":
            console.log(6);
            break;
        case "Sunday":
            console.log(7);
            break;
        default:
            console.log("error")
    }
}

dayOfWeek("Monday")
dayOfWeek("Friday")
dayOfWeek(5)

function daysOfMonth(month, year) {

    const daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth)
}

daysOfMonth(1, 2021)

function squareStars(num) {

    const stars = '* '

    for (let i = 0; i < num; i++) {
        console.log(stars.repeat(num))
    }
}

squareStars(7)
squareStars(5)

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