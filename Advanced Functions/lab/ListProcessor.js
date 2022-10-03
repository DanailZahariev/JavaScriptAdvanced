function solve(input) {
    let result = (function () {
        let innerCollection = [];
        return {
            add: (str) => innerCollection.push(str),
            remove: (str) => innerCollection = innerCollection.filter((el) => el !== str),
            print: () => console.log(innerCollection.join(','))
        };
    })();

    for (const el of input) {
        let [command, str] = el.split(' ');
        result[command](str);
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])