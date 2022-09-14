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
