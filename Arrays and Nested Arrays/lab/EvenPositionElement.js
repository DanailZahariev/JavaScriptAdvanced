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