function fruit(fruitName, weight, price) {

    let weightInGrams = weight / 1000;
    let sum = weight * price / 1000;

    console.log(`I need $${sum.toFixed(2)} to buy ${weightInGrams.toFixed(2)} kilograms ${fruitName}.`)

}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)