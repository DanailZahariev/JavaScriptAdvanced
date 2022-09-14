function diagonalSum(matrix) {

    let first = 0;
    let second = 0;
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    matrix.forEach(arr => {

        first += arr[firstIndex++];
        second += arr[secondIndex--];
    });

    console.log(first + ' ' + second);
}

diagonalSum([[20, 40],
    [10, 60]])
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])