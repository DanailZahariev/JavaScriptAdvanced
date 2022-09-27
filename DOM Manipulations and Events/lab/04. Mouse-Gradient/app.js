function attachGradientEvents() {

    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', function (evt) {

        let power = Math.trunc(evt.offsetX / (evt.target.clientWidth - 1) * 100);
        document.getElementById('result').textContent = power + '%';
    });

    gradient.addEventListener('mouseout', function (evt) {
        document.getElementById('result').textContent = '';
    });
}
