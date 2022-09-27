function deleteByEmail() {

    let email = document.getElementsByName('email')[0].value.trim();
    let table = document.querySelectorAll('#customers td:nth-child(2)');
    let found = false;

    for (let row of table) {
        if (row.textContent === email) {
            row.parentElement.remove();
            found = true;
        }
    }
    let result = document.getElementById('result');
    result.textContent = found ? 'Deleted.' : 'Not found.';
}