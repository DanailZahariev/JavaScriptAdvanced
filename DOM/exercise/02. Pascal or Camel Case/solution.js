function solve() {

    let input = document.getElementById('text').value;
    let textCase = document.getElementById('naming-convention').value;
    let arr = input.split(' ');
    let result = '';

    switch (textCase) {
        case 'Camel Case':
            arr.forEach((e, i) => {
                result = i === 0 ? result += e.toLowerCase() : result += e[0].toUpperCase() + e.substring(1).toLowerCase();
            });
            break;
        case 'Pascal Case':
            arr.forEach((e) => {
                e = e.toLowerCase();
                result += e[0].toUpperCase() + e.substring(1);
            });
            break;
        default:
            result = 'Error!';
    }
    document.getElementById('result').textContent = result;
}