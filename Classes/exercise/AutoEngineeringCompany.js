function autoEngineeringCompany(input) {

    let carBrand = new Map();

    input.forEach(el => {
        let [brand, model, quantity] = el.split(' | ');
        quantity = Number(quantity);

        if (!carBrand.has(brand)) {
            let brands = new Map();
            carBrand.set(brand, brands);
        }
        if (carBrand.get(brand).has(model)) {
            carBrand.get(brand).set(model, carBrand.get(brand).get(model) + quantity)
        } else {
            carBrand.get(brand).set(model, quantity);
        }
    });

    for (const [brand, models] of carBrand) {
        console.log(brand);
        for (const [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);