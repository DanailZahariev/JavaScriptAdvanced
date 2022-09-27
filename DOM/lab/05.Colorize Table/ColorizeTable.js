function colorize() {

    let towns = document.querySelectorAll("table tr");

    for (let i = 1; i < towns.length; i += 2) {
        towns[i].style.background = 'teal';
    }
}