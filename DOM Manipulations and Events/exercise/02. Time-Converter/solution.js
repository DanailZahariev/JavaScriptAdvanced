function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]'));

    for (const button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(evt) {

        let value = Number(evt.target.parentElement.querySelector('input[type=text]').value);
        let unit = evt.target.id;

        switch (unit) {
            case 'daysBtn':
                calculate(value);
                break;
            case 'hoursBtn':
                calculate(value / 24)
                break;
            case 'minutesBtn':
                calculate(value / 24 / 60)
                break;
            case 'secondsBtn':
                calculate(value / 24 / 60 / 60)
                break;
        }
    }

    function calculate(value) {
        let inputs = Array.from(document.querySelectorAll('input[type=text]'));
        inputs.shift().value = value;
        let currentValue = value * 24;

        for (const input of inputs) {
            input.value = currentValue;
            currentValue *= 60;
        }
    }
}