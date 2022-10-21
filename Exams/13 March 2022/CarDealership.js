class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (model === '' || Number(horsepower) < 0 || Number(price) < 0 || Number(mileage) < 0) {
            throw new Error('Invalid input!');
        }

        horsepower = Number(horsepower);
        price = Number(price);
        mileage = Number(mileage);

        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {

        let carModel = this.availableCars.find(c => c.model === model);
        let soldPrice = 0;

        if (!carModel) {
            throw new Error(`${model} was not found!`);
        }

        if (carModel.mileage <= desiredMileage) {
            soldPrice = carModel.price;

        } else if (carModel.mileage - desiredMileage <= 40000) {
            soldPrice = carModel.price * 0.95;

        } else {
            soldPrice = carModel.price * 0.90;
        }

        this.totalIncome += soldPrice;
        this.soldCars.push({model, horsepower: carModel.horsepower, price: soldPrice});
        this.availableCars.slice(this.availableCars.indexOf(carModel), 1);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {

        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }

        let result = `-Available cars:\n`;
        this.availableCars.forEach(c => result += `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$\n`);
        return result.trim();
    }

    salesReport(criteria) {

        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`;

        if (criteria === 'horsepower') {
            let sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
            sorted.forEach(c => result += `---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$\n`);
        }

        if (criteria === 'model') {
            let sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            sorted.forEach(c => result += `---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$\n`);
        }
        return result.trim();
    }
}