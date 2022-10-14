class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {

        if (this.spaceAvailable - spaceRequired < 0) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});
        this.spaceAvailable -= Number(spaceRequired);
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {

        let plant = this.plants.find(p => p.plantName === plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (quantity === 1) {
            plant.ripe = true;
            plant.quantity += Number(quantity);
            return `${quantity} ${plantName} has successfully ripened.`;
        }

        plant.ripe = true;
        plant.quantity += Number(quantity);

        return `${quantity} ${plantName}s have successfully ripened.`
    }

    harvestPlant(plantName) {

        let plant = this.plants.find(p => p.plantName === plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let quantity = plant.quantity;
        this.spaceAvailable += Number(plant.spaceRequired);

        this.plants.splice(this.plants.indexOf(plant), 1);
        this.storage.push({plantName, quantity: quantity});

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {

        let result = '';
        result += `The garden has ${this.spaceAvailable} free space left.\n`;

        let sortedPlants = this.plants.sort((a, b) => a.plantName - b.plantName)
            .map(p => p.plantName)
            .join(', ');
        result += `Plants in the garden: ${sortedPlants}\n`

        result += `Plants in storage: `;
        if (this.storage.length === 0) {
            result += 'Plants in storage: The storage is empty.';
        } else {
            let storagePlants = [];
            for (let p of this.storage) {
                storagePlants.push(`${p.plantName} (${p.quantity})`);
            }
            result += storagePlants.join(', ');
        }
        return result.trim();
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());