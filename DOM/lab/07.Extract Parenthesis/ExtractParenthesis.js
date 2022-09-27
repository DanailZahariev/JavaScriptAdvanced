function extract(content) {

    let elementText = document.getElementById(content).textContent;

    let pattern = /\(([^)]+)\)/g;

    let result = elementText.matchAll(pattern);

    let matches = [];

    for (let element of result) {
        matches.push(element);
    }

    return matches.join('; ')
}