function calculator() {

    let selector1;
    let selector2;
    let resultSelector;

    return {

        init: (firstSelector, secondSelector, resSelector) => {
            selector1 = document.querySelector(firstSelector);
            selector2 = document.querySelector(secondSelector);
            resultSelector = document.querySelector(resSelector);
        },

        add: () => {
            let num1 = Number(selector1.value);
            let num2 = Number(selector2.value);
            resultSelector.value = num1 + num2;
        },

        subtract: () => {
            let num1 = Number(selector1.value);
            let num2 = Number(selector2.value);
            resultSelector.value = num1 - num2;
        }
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');