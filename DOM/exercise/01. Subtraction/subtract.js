function subtract() {

    let numberOne = Number(document.getElementById('firstNumber').value)
    let numberTwo = Number(document.getElementById('secondNumber').value);

    document.getElementById('result').textContent = numberOne - numberTwo;
}