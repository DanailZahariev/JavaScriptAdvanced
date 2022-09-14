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