function diagonalAttack(inputArray) {

    let matrix = [];
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    let newMatrix = [];

    for (let element of inputArray) {
        let inputArray = element.split(" ");
        matrix.push(inputArray);
    }

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += Number(matrix[i][i]);
        secondaryDiagonal += Number(matrix[matrix.length - 1 - i][i]);
    }

    if (mainDiagonal === secondaryDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            newMatrix.push([]);
            for (let j = 0; j < matrix.length; j++) {
                newMatrix[i][j] = mainDiagonal;
            }
            newMatrix[i][i] = matrix[i][i];
            newMatrix[i][matrix.length - 1 - i] = matrix[i][matrix.length - 1 - i];
        }
        newMatrix.forEach(el => console.log(el.join(' ')));
    } else {
        matrix.forEach(el => console.log(el.join(' ')));
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);