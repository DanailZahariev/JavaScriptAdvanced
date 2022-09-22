function townsToJSON(arr) {

    let result = [];

    function getData() {
        let current = arr.shift().split(' | ');
        let returnData = [];

        for (let currentElement of current) {
            currentElement = currentElement.replace('| ', '')
            currentElement = currentElement.replace(' |', '')
            returnData.push(currentElement);
        }
        return returnData;
    }

    let [title1, tittle2, tittle3] = getData();

    while (arr.length) {
        let [Town, Latitude, Longitude] = getData();

        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));

        let current = {};

        current[title1] = Town;
        current[tittle2] = Latitude;
        current[tittle3] = Longitude;

        result.push(current);
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);