function calorieObject(arr = []) {

    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        result[food] = Number(arr[i + 1]);
    }
    return result;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))