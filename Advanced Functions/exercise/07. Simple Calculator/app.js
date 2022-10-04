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
            resultSelector.value = Number(selector1.value) + Number(selector2.value);
        },

        subtract: () => {
            resultSelector.value = Number(selector1.value) - Number(selector2.value);
        }
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');