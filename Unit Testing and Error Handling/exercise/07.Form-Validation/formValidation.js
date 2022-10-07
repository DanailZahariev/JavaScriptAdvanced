function validate() {

    let usernameInput = document.getElementById('username');
    let userEmail = document.getElementById('email');
    let userPassword = document.getElementById('password');
    let userConfirmPassword = document.getElementById('confirm-password');
    let submit = document.getElementById('submit');
    let valid = document.getElementById('valid');
    let companyCheckBox = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');

    submit.addEventListener('click', validateForm);

    companyCheckBox.addEventListener('change', () => {
        companyInfo.style.display = companyCheckBox.checked ? 'block' : 'none';
    });

    function validateForm(evt) {
        evt.preventDefault();

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        let passwordPattern = /^\w{5,15}$/;
        let confirmPasswordPattern = /^\w{5,15}$/;
        let emailPattern = /@(\w)*\./;
        let isValidForm = true;

        validateInput(usernameInput, usernamePattern);
        validateInput(userEmail, emailPattern);
        validateInput(userPassword, passwordPattern);
        validateInput(userConfirmPassword, confirmPasswordPattern);

        if (userPassword.value !== userConfirmPassword.value) {
            userPassword.style.borderColor = 'red';
            userConfirmPassword.style.borderColor = 'red';
            isValidForm = false;
        }

        if (companyCheckBox.checked) {
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
                isValidForm = false;
            } else {
                companyNumber.style.borderColor = '';
            }
        }

        function validateInput(element, matcher) {
            if (!matcher.test(element.value)) {
                element.style.borderColor = 'red';
                isValidForm = false;
            } else {
                element.style.borderColor = '';
            }
        }

        if (isValidForm) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    }
}
