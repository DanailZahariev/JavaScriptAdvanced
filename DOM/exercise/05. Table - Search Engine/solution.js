function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let searchElement = document.getElementById('searchField');
    let tableElements = document.querySelectorAll('tbody tr');

    function onClick() {

        for (let row of tableElements) {
            row.classList.remove('select');
            if (row.textContent.includes(searchElement.value)) {
                row.className = 'select';
            }
        }
        searchElement.value = '';
    }
}