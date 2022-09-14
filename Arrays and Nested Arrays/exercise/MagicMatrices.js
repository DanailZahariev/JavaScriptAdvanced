function magicMatrices(matrix = []) {

    let isMagic = false;
    let lastSum = 0;

    for (let i = 0; i < matrix.length -1; i++) {
        let sum = matrix[i].map(Number).reduce((a, b) => a + b, 0);
        if (sum === lastSum && i !== 0) {
            isMagic = true;
        }
        lastSum = sum;
    }
    console.log(isMagic);
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])