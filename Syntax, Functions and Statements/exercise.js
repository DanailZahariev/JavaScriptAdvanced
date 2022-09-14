function fruit(fruitName, weight, price) {

    let weightInGrams = weight / 1000;
    let sum = weight * price / 1000;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInGrams.toFixed(2)} kilograms ${fruitName}.`)

}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)

function greatestCommonDivisor(num1, num2) {

    let gcd;

    for (let i = 1; i <= num1 && i <= num2; i++) {

        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }

    console.log(gcd)
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);


function sameNumbers(numbers) {

    const num = numbers.toString();
    let result = parseInt(num[0]);
    let isSame = true;

    for (let i = 1; i < num.length; i++) {

        result += parseInt(num[i]);

        if (num[i] !== num[i - 1]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(result)
}

sameNumbers(2222222);
sameNumbers(1234);


function previousDay(year, month, day) {

    let date = new Date(year, month, 0);
    date.setDate(day - 1)

    console.log(`${date.getFullYear()}-${Number(date.getMonth() + 1)}-${date.getDate()}`)
}

previousDay(2016, 9, 30)
previousDay(2016, 10, 1)

function timeToWalk(num1, num2, num3) {

    let stepsNumber = Number(num1);
    let stepsMetersHr = Number(num2);
    let studentSpeed = Number(num3);

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "")
        + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)


function roadRadar(speed, area) {

    let result = '';
    let speedLimit = 0;
    let difference = 0;
    let status = '';

    switch (area) {

        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
        default:
            break;
    }

    if (speed <= speedLimit && speed > 0) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        difference = speed - speedLimit;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }
    console.log(result);
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')


function cookingByNumbers(number, ...params) {

    number = Number(number);

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.2;

    for (let i = 0; i < params.length; i++) {

        switch (params[i]) {
            case 'chop':
                number = chop(number);
                break;
            case 'dice':
                number = dice(number);
                break;
            case 'spice':
                number = spice(number);
                break;
            case 'bake':
                number = bake(number);
                break;
            case 'fillet':
                number = fillet(number);
                break;
        }
        console.log(number);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

function validtyChecker(x1, y1, x2, y2) {
    solve(x1, y1, 0, 0);
    solve(x2, y2, 0, 0);
    solve(x1, y1, x2, y2);


    function solve(x1, y1, x2, y2){
        let result = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        if (result == result.toFixed(0)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

validtyChecker(3, 0, 0, 4)
validtyChecker(2, 1, 1, 1)

function wordUppercase(text) {

    let result = text.toUpperCase().match(/\w+/g).join(', ');

    console.log(result)
}

wordUppercase('Hi, how are you?')
wordUppercase('hello')