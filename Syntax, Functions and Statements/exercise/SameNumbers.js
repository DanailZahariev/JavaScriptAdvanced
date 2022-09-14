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