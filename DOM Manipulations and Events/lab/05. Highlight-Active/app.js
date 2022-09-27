function focused() {

    Array.from(document.querySelectorAll('input')).forEach(e => {

        e.addEventListener('focus', () => {
            e.parentElement.classList.add('focused');
        });

        e.addEventListener('blur', () => {

            e.parentElement.classList.remove('focused');
        });
    });
}