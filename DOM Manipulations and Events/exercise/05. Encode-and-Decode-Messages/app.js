function encodeAndDecodeMessages() {

    let buttons = document.querySelectorAll('button');
    let textArea = document.querySelectorAll('textarea');
    let encodeInput = textArea[0];
    let decodeInput = textArea[1];

    buttons[0].addEventListener('click', encodeMessage);
    buttons[1].addEventListener('click', decodeMessage);

    function decodeMessage(evt) {
        let parentEl = evt.target.parentElement;
        let textValue = parentEl.getElementsByTagName('textarea')[0].value;
        let decode = textValue.split('').map(el => el.charCodeAt(0) - 1);
        decodeInput.value = String.fromCharCode.apply(0, decode);
    }

    function encodeMessage(evt) {
        let parentEl = evt.target.parentElement;
        let textValue = parentEl.getElementsByTagName('textarea')[0].value;
        let encode = textValue.split('').map(el => el.charCodeAt(0) + 1);
        let text = String.fromCharCode.apply(0, encode);
        encodeInput.value = '';
        decodeInput.value = text;
    }
}