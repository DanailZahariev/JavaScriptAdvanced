function search() {

    let towns = Array.from(document.querySelectorAll('ul li'));
    let search = document.getElementById('searchText').value;
    let matches = 0;

    for (let town of towns) {
        let text = town.textContent;

        if (text.includes(search)) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            matches++;
        } else {
            town.style.textDecoration = 'none';
            town.style.fontWeight = '';
        }
    }
    document.getElementById('result').textContent = `${matches} matches found`;
}
