function juiceFlavors(input) {

    let juices = new Map();
    let output = new Map();

    input.forEach(el => {
        let [fruit, quantity] = el.split(' => ');

        if (!juices.has(fruit)) {
            juices.set(fruit, 0);
        }
        juices.set(fruit, juices.get(fruit) + Number(quantity));

        while (juices.get(fruit) >= 1000) {
            debugger
            juices.set(fruit, juices.get(fruit) - 1000);
            output.get(fruit) === undefined ? output.set(fruit, 1) : output.set(fruit, output.get(fruit) + 1);
        }
    });

    for (let [key, value] of output) {
        console.log(`${key} => ${value}`)
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);


juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);