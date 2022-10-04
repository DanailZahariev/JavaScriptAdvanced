function solution() {

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    return function manager (input) {
        let actionHandler = commandOpt();
        let [command, element, quantity] = input.split(' ');
        return actionHandler[command](element, quantity);

    }

    function commandOpt() {
        return {
            restock: (element, quantity) => {
                store[element] += Number(quantity);
                return 'Success';
            },
            prepare: (recipe, quantity) => {
                let currentRecipe = recipes[recipe];
                for (let [el, qty] of Object.entries(currentRecipe)) {

                    let currentEl = store[el] - Number(qty) * Number(quantity);
                    if (currentEl < 0) {
                        return `Error: not enough ${el} in stock`
                    }
                    store[el] = currentEl;
                }
                return 'Success';
            },
            report: () => {
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
            }
        };
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock