function attachEventsListeners() {

    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convert);

    function convert() {

        let inputValue = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        switch (inputUnits) {
            case 'km':
                makeConvert(inputValue * 1000);
                break;
            case 'm':
                makeConvert(inputValue);
                break;
            case 'cm':
                makeConvert(inputValue * 0.01);
                break;
            case 'mm':
                makeConvert(inputValue * 0.001);
                break;
            case 'mi':
                makeConvert(inputValue * 1609.34);
                break;
            case 'yrd':
                makeConvert(inputValue * 0.9144);
                break;
            case 'ft':
                makeConvert(inputValue * 0.3048);
                break;
            case 'in':
                makeConvert(inputValue * 0.0254);
                break;
        }

        function makeConvert(value) {
            let outputValue = 0;
            switch (outputUnits) {
                case 'km':
                    outputValue = value / 1000;
                    break;
                case 'm':
                    outputValue = value;
                    break;
                case 'cm':
                    outputValue = value / 0.01;
                    break;
                case 'mm':
                    outputValue = value / 0.001;
                    break;
                case 'mi':
                    outputValue = value / 1609.34;
                    break;
                case 'yrd':
                    outputValue = value / 0.9144;
                    break;
                case 'ft':
                    outputValue = value / 0.3048;
                    break;
                case 'in':
                    outputValue = value / 0.0254;
                    break;
            }
            outputDistance.value = outputValue;
        }
    }
}