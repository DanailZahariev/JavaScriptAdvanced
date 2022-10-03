function solution() {

    let result = '';
    return {
        append: (str) => result += str,
        removeStart: (i) => result = result.substring(i),
        removeEnd: (i) => result = result.substring(0, result.length - i),
        print: () => console.log(result)
    };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();