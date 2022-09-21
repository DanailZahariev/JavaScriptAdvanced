function carFactory(car) {

    function createEngine(power) {
        if (power <= 90) {
            return {power: 90, volume: 1800};
        } else if (power <= 120) {
            return {power: 120, volume: 2400};
        } else {
            return {power: 200, volume: 3500}
        }
    }

    function setWheels(wheels) {
        let result = [];

        let finalSize = wheels % 2 ? wheels : wheels - 1;

        for (let i = 0; i < 4; i++) {
            result.push(finalSize);
        }
        return result;
    }

    return {
        model: car.model,
        engine: createEngine(car.power),
        carriage: {type: car.carriage, color: car.color},
        wheels: setWheels(car.wheelsize)
    };
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))