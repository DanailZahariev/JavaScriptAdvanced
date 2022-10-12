window.addEventListener('load', solve);

function solve() {

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', addFurniture);


    function addFurniture(evt) {

        evt.preventDefault();

        let model = document.getElementById('model');
        let year = document.getElementById('year');
        let description = document.getElementById('description');
        let price = document.getElementById('price');

        if (model.value === '' || description.value === ''
            || year.value < '' || Number(year.value) < 0
            || price.value === '' || Number(price.value) < 0) {
            return;
        }

        let furnitureList = document.getElementById('furniture-list');
        let trInfo = document.createElement('tr');
        let trHide = document.createElement('tr');
        trInfo.classList.add('info');
        trHide.classList.add('hide');

        let tDName = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdYear = document.createElement('td');
        let tdDescription = document.createElement('td');
        tDName.appendChild(document.createTextNode(`${model.value}`));
        tdPrice.appendChild(document.createTextNode(`${Number(price.value).toFixed(2)}`));

        let tdActions = document.createElement('td');
        let buttonMore = document.createElement('button');
        let buttonBuy = document.createElement('button');
        buttonMore.classList.add('moreBtn');
        buttonMore.appendChild(document.createTextNode('More Info'));
        buttonBuy.classList.add('buyBtn');
        buttonBuy.appendChild(document.createTextNode('Buy it'));
        tdActions.appendChild(buttonMore);
        tdActions.appendChild(buttonBuy);
        tdYear.appendChild(document.createTextNode(`Year: ${Number(year.value)}`));
        tdDescription.appendChild(document.createTextNode(`Description: ${description.value}`));
        tdDescription.setAttribute("colspan", '3');
        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescription);
        trInfo.appendChild(tDName);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdActions);
        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trHide);

        buttonMore.addEventListener('click', (evt) => {
            if (evt.target.textContent === 'More Info') {
                evt.target.textContent = 'Less Info';
                trHide.style.display = 'contents';
            } else {
                evt.target.textContent = 'More Info';
                trHide.style.display = 'none';
            }
        });

        buttonBuy.addEventListener('click', (evt) => {
            let element = evt.target.parentElement.parentElement;
            let totalPrice = document.querySelector('.total-price');
            let price = Number(document.querySelectorAll('td')[1].textContent);
            let sum = Number(totalPrice.textContent) + price;

            element.parentElement.removeChild(element);
            totalPrice.textContent = sum.toFixed(2);
        });

        model.value = '';
        price.value = '';
        description.value = '';
        year.value = '';
    }
}
