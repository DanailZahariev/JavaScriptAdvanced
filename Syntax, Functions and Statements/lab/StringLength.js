function stringLength(str1, str2, stt3) {
    let sumOfStrings = str1.length + str2.length + stt3.length
    let averageLength = Math.floor(sumOfStrings / 3)
    console.log(sumOfStrings)
    console.log(averageLength)
}

stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')