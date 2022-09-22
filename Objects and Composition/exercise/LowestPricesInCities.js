function lowestPricesInCities(inputArr) {

    let result = {};

    for (let element of inputArr) {
        let [townName, productName, price] = element.split(' | ');
        price = Number(price);

        if (!result[productName]) {
            result[productName] = {price, townName};
        } else if (result[productName]['price'] > price) {
            result[productName]['price'] = price;
            result[productName]['townName'] = townName;
        }
    }

    for (let resultElement in result) {
        let product = result[resultElement];
        console.log(`${resultElement} -> ${product.price} (${product.townName})`)
    }
}

lowestPricesInCities([
    'Sofia City | BMW | 100000',
    'Mexico City | BMW | 99999',
    'Washington City | Mercedes | 1000',
    'Sofia City | NoOffenseToCarLovers | 0',])