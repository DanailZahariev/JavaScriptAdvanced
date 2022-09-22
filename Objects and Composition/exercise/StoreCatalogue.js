function storeCatalogue(arr) {

    let result = [];

    function create(name, price) {
        return {name, price};
    }

    for (const element of arr) {
        let name = element.split(' : ')[0];
        let price = element.split(' : ')[1];

        let product = create(name, price);
        result.push(product);
    }

    let sorted = result.sort((a, b) => a.name.localeCompare(b.name));

    let currentChar = "";
    for (const element of sorted) {
        let firstChar = element.name.split("")[0];
        if (firstChar !== currentChar) {
            currentChar = firstChar;
            console.log(currentChar);
        }
        console.log(`  ${element.name}: ${element.price}`)
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])