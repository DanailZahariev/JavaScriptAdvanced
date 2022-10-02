function solve() {

    let buttons = document.querySelectorAll('button');
    let tableBody = document.querySelector('tbody');
    let inputArea = document.querySelector('textarea');


    buttons[0].addEventListener('click', generateFurniture);
    buttons[1].addEventListener('click', buyProducts);

    function generateFurniture() {
        let furnitureArr = JSON.parse(inputArea.value);

        for (const furniture of furnitureArr) {
            let createTr = document.createElement('tr');

            let createTdImg = document.createElement('td');
            let tdImg = document.createElement('img');
            tdImg.src = furniture['img'];
            createTr.appendChild(createTdImg)
            createTdImg.appendChild(tdImg);


            let createTdName = document.createElement('td');
            let tdNameP = document.createElement('p');
            tdNameP.textContent = furniture['name'];
            createTr.appendChild(createTdName);
            createTdName.appendChild(tdNameP);

            let createTdPrice = document.createElement('td');
            let tdPriceP = document.createElement('p');
            tdPriceP.textContent = furniture['price'];
            createTr.appendChild(createTdPrice);
            createTdPrice.appendChild(tdPriceP);

            let createTdDecFactor = document.createElement('td');
            let decFactorP = document.createElement('p');
            decFactorP.textContent = furniture['decFactor'];
            createTr.appendChild(createTdDecFactor);
            createTdDecFactor.appendChild(decFactorP);

            let createTdInput = document.createElement('td');
            let tdInput = document.createElement('input');
            tdInput.type = 'checkbox';
            createTr.appendChild(createTdInput);
            createTdInput.appendChild(tdInput);

            tableBody.appendChild(createTr);
        }
    }

    function buyProducts() {

        let result = document.querySelectorAll('textarea')[1];
        let products = [];
        let totalPrice = 0;
        let avgDecFactor = 0;

        let productsFromTable = Array.from(document.querySelectorAll('tbody tr'));

        for (let el of productsFromTable) {
            let isItemChecked = el.querySelector('input[type=checkbox]:checked');

            if (isItemChecked) {
                let productDetails = el.querySelectorAll('p');
                let productName = productDetails[0].textContent;
                let productPrice = productDetails[1].textContent;
                let productAvgRefactor = productDetails[2].textContent;
                products.push(productName);
                totalPrice += Number(productPrice);
                avgDecFactor += Number(productAvgRefactor);
            }
        }

        result.value = `Bought furniture: ${products.join(', ')}\n` +
            `Total price: ${totalPrice.toFixed(2)}\n` +
            `Average decoration factor: ${avgDecFactor / products.length}`;
    }
}