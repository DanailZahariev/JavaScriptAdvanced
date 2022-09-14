function validtyChecker(x1, y1, x2, y2) {
    solve(x1, y1, 0, 0);
    solve(x2, y2, 0, 0);
    solve(x1, y1, x2, y2);


    function solve(x1, y1, x2, y2){
        let result = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        if (result == result.toFixed(0)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}

validtyChecker(3, 0, 0, 4)
validtyChecker(2, 1, 1, 1)