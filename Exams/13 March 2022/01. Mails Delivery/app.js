function solve() {

    let recipientName = document.getElementById('recipientName');
    let tittle = document.getElementById('title');
    let message = document.getElementById('message');
    let addMessage = document.getElementById('add');
    let resetMessage = document.getElementById('reset');
    let listMails = document.getElementById('list');
    let sentList = document.querySelector('.sent-list');
    let deleteList = document.querySelector('.delete-list');

    resetMessage.addEventListener('click', (evt) => {
        evt.preventDefault();
        recipientName.value = '';
        tittle.value = '';
        message.value = '';
    });

    addMessage.addEventListener('click', sendMail);

    function sendMail(evt) {
        evt.preventDefault();

        if (!recipientName.value || !tittle.value || !message.value) {
            return;
        }

        let createLi = createHtmlElements('li');
        let createTitle = createHtmlElements('h4', `Title: ${tittle.value}`);
        let createRecipient = createHtmlElements('h4', `Recipient Name: ${recipientName.value}`);
        let createMessage = createHtmlElements('span', `${message.value}`);
        let createLiDiv = createHtmlElements('div');
        createLiDiv.classList.add('list-action');
        let buttonSend = createHtmlElements('button', `Send`);
        let buttonDelete = createHtmlElements('button', `Delete`);
        buttonSend.setAttribute('type', 'submit');
        buttonDelete.setAttribute('type', 'submit');
        buttonSend.id = 'send';
        buttonDelete.id = 'delete';
        createLiDiv.appendChild(buttonSend);
        createLiDiv.appendChild(buttonDelete);
        createLi.appendChild(createTitle);
        createLi.appendChild(createRecipient);
        createLi.appendChild(createMessage);
        createLi.appendChild(createLiDiv);
        listMails.appendChild(createLi);
        buttonDelete.addEventListener('click', deleteMail);

        recipientName.value = '';
        tittle.value = '';
        message.value = '';

        buttonSend.addEventListener('click', (evt) => {
            evt.target.parentElement.parentElement.remove();
            let sentListLi = createHtmlElements('li');
            let sentListRecipient = createHtmlElements('span',
                'To: ' + createRecipient.textContent.substring(16));
            let sentListTitle = createHtmlElements('span',
                `Title: ${createTitle.textContent}`);
            let sentListDiv = createHtmlElements('div');
            sentListDiv.classList.add('btn');
            let sentListDeleteButton = createHtmlElements('button', `Delete`);
            sentListDeleteButton.classList.add('delete');
            sentListDeleteButton.setAttribute('type', 'submit');
            sentListDiv.appendChild(sentListDeleteButton);
            sentListLi.appendChild(sentListRecipient);
            sentListLi.appendChild(sentListTitle);
            sentListLi.appendChild(sentListDiv);
            sentList.appendChild(sentListLi);

            sentListDeleteButton.addEventListener('click', deleteMail);
        });

        function deleteMail(evt) {
            evt.target.parentElement.parentElement.remove();
            let deletedLi = createHtmlElements('li');
            let deletedTittle = createHtmlElements('span', 'To: ' + createRecipient.textContent.substring(16));
            let deletedRecipient = createHtmlElements('span', `${createTitle.textContent}`);
            deletedLi.appendChild(deletedTittle);
            deletedLi.appendChild(deletedRecipient);
            deleteList.appendChild(deletedLi);
        }

        function createHtmlElements(tagName, content) {
            let element = document.createElement(tagName);
            if (content) {
                element.textContent = content;
            }
            return element;
        }
    }
}

solve()