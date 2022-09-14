function biggestElement(matrix) {

    let result = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length + 1; j++) {
            if (matrix[i][j] > result) {
                result = matrix[i][j];
            }
        }
    }
    console.log(result)
}

biggestElement([[20, 50, 10],
    [8, 33, 145]])
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])