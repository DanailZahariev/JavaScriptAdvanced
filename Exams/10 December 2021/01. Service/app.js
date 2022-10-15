window.addEventListener("load", solve);

function solve() {

    let productDescription = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let productType = document.getElementById('type-product');
    let submitButton = document.querySelector('form button');
    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');
    submitButton.addEventListener('click', sendRepairForm);

    function sendRepairForm(evt) {
        evt.preventDefault();
        if (productDescription.value && clientName.value && clientPhone.value) {
            sendInfo(evt, productDescription.value, clientPhone.value, clientName.value, productType.value);
            clear();
        }
    }

    function sendInfo(evt, description, phone, name, type) {

        let div = generateElements('div', '', receivedOrders);
        div.setAttribute('class', 'container');
        generateElements('h2', `Product type for repair: ${type}`, div);
        generateElements('h3', `Client information: ${name}, ${phone}`, div);
        generateElements('h4', `Description of the problem: ${description}`, div);
        let startBtn = generateElements('button', 'Start repair', div);
        let finishBtn = generateElements('button', 'Finish repair', div);
        startBtn.setAttribute('class', 'start-btn');
        finishBtn.setAttribute('class', 'finish-btn');
        finishBtn.setAttribute('disabled', 'disabled');

        startBtn.addEventListener('click', () => {
            startBtn.setAttribute('disabled', 'disabled');
            finishBtn.removeAttribute('disabled');
        });

        finishBtn.addEventListener('click', finishRepair);

        function finishRepair(evt) {
            evt.target.parentNode.remove();
            let finishedDiv = generateElements('div', '', completedOrders);
            finishedDiv.setAttribute('class', 'container');
            generateElements('h2', `Product type for repair: ${type}`, finishedDiv);
            generateElements('h3', `Client information: ${name}, ${phone}`, finishedDiv);
            generateElements('h4', `Description of the problem: ${description}`, finishedDiv);
        }
    }


    document.querySelector('.clear-btn').addEventListener('click', () => {
        Array.from(completedOrders.querySelectorAll('div')).forEach(el => el.remove());
    });

    function generateElements(tagName, content, parent) {
        let element = document.createElement(tagName);
        element.textContent = content;
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

    function clear() {
        productType.value = '';
        productDescription.value = '';
        clientName.value = '';
        clientPhone.value = '';
    }
}