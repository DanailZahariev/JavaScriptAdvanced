function sortAnArrayBy2Criteria(arr = []) {

    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    for (const word of arr) {
        console.log(word)
    }
}

sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma'])