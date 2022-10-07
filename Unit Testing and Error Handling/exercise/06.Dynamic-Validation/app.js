function validate() {

    let email = document.getElementById('email');
    let matcher = /[\wW]+@[\wW]+.[\wW]+/;

    email.addEventListener('change', () => {

        if (!matcher.test(email.value)) {
            email.className = 'error';
            return;
        }
        email.className = '';
    })
}