function solve() {

    document.querySelector("#container button").addEventListener('click', convert);

    let selectElement = document.getElementById('selectMenuTo');

    let optionHex = document.createElement('option');
    optionHex.value = 'hexadecimal';
    optionHex.textContent = 'Hexadecimal';

    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.textContent = 'Binary';

    selectElement.appendChild(optionHex);
    selectElement.appendChild(optionBinary);

    function convert() {

        let result = document.getElementById('result');
        let input = Number(document.getElementById('input').value);

        if (selectElement.value === 'binary') {
            result.value = input.toString(2);
        } else if (selectElement.value === 'hexadecimal') {
            result.value = input.toString(16).toUpperCase();
        }
    }
}