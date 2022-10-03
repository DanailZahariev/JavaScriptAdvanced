function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function calc(area, vol, input) {
    input = JSON.parse(input);
    let result = [];
    for (let el of input) {
        let calculatedArea = area.call(el);
        let calculatedVol = vol.call(el);
        result.push({
            area: calculatedArea,
            volume: calculatedVol
        });
    }
    return result;
}

let result = calc(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)

console.log(JSON.stringify(result));