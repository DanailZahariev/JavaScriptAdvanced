function argumentInfo(...args) {

    let result = {};

    for (let arg of args) {
        let type = typeof (arg);
        console.log(`${type}: ${arg}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type] = result[type] + 1;
    }
    let buff = '';
    for (let [key, value] of Object.entries(result)) {
        buff += `${key} = ${value}\n`
    }
    console.log(buff)
}

argumentInfo('cat', 42, function () {
    console.log('Hello world!');
});