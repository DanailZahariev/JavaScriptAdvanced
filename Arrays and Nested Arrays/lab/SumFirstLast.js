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