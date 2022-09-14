function pieceOfPie(pies, startFlavour, endFlavour) {

    const start = pies.indexOf(startFlavour);
    const end = pies.indexOf(endFlavour) + 1;

    return pies.slice(start, end);
}

console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))