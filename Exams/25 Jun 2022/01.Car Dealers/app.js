window.addEventListener("load", solve);

function solve() {

    let make = document.getElementById('make');
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let fuel = document.getElementById('fuel');
    let originalCost = document.getElementById('original-cost');
    let sellingPrice = document.getElementById('selling-price');
    let publishButton = document.getElementById('publish');

    publishButton.addEventListener('click', publishOffer);

    function publishOffer(evt) {
        evt.preventDefault();

        if (make.value === '' || model.value === ''
            || year.value === '' || fuel.value === ''
            || originalCost.value === '' || sellingPrice.value === ''
            || Number(originalCost.value) > Number(sellingPrice.value)) {
            return;
        }

        let tableBody = document.getElementById('table-body');
        let createTr = document.createElement('tr');
        createTr.classList.add('row');
        let tdMake = document.createElement('td');
        let tdModel = document.createElement('td');
        let tdYear = document.createElement('td');
        let tdFuel = document.createElement('td');
        let tdOriginalCost = document.createElement('td');
        let tdSellingPrice = document.createElement('td');
        let tdActions = document.createElement('td');
        let editButton = document.createElement('button');
        let sellButton = document.createElement('button');
        editButton.classList.add('action-btn', 'edit');
        editButton.appendChild(document.createTextNode('Edit'));
        sellButton.classList.add('action-btn', 'sell')
        sellButton.appendChild(document.createTextNode('Sell'));
        tdActions.appendChild(editButton);
        tdActions.appendChild(sellButton);
        createTr.appendChild(tdMake).textContent = make.value;
        createTr.appendChild(tdModel).textContent = model.value;
        createTr.appendChild(tdYear).textContent = year.value;
        createTr.appendChild(tdFuel).textContent = fuel.value;
        createTr.appendChild(tdOriginalCost).textContent = originalCost.value;
        createTr.appendChild(tdSellingPrice).textContent = sellingPrice.value;
        createTr.appendChild(tdActions);
        tableBody.appendChild(createTr);

        for (const input of document.querySelectorAll('input')) {
            input.value = '';
        }

        editButton.addEventListener('click', editOffer);
        sellButton.addEventListener('click', sellCar);

        function editOffer(evt) {
            let removeCar = evt.target.parentElement.parentElement;
            tableBody.removeChild(removeCar);

            make.value = tdMake.textContent;
            model.value = tdModel.textContent;
            year.value = tdYear.textContent;
            fuel.value = tdYear.textContent;
            originalCost.value = tdOriginalCost.textContent;
            sellingPrice.value = tdSellingPrice.textContent;
        }

        function sellCar(evt) {
            let appendSoldCar = document.getElementById('cars-list');
            let removeCar = evt.target.parentElement.parentElement;
            tableBody.removeChild(removeCar);

            let createLi = document.createElement('li');
            createLi.classList.add('each-list');
            let spanMakeAndModel = document.createElement('span');
            let spanYear = document.createElement('span');
            let spanProfit = document.createElement('span');
            spanMakeAndModel.textContent = `${tdMake.textContent} ${tdModel.textContent}`;
            spanYear.textContent = `${tdYear.textContent}`;
            spanProfit.textContent = `${tdSellingPrice.textContent - tdOriginalCost.textContent}`;
            createLi.appendChild(spanMakeAndModel);
            createLi.appendChild(spanYear);
            createLi.appendChild(spanProfit);
            appendSoldCar.appendChild(createLi);

            let profit = document.getElementById('profit');
            let totalSum = Number(profit.textContent) + Number(spanProfit.textContent);
            profit.textContent = totalSum.toFixed(2);
        }
    }
}
