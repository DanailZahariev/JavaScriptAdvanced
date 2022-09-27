function addItem() {

    let newElement = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    if (newElement.length === 0) {
        return;
    }

    let createLi = document.createElement('li');
    createLi.textContent = newElement;

    let remove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    remove.appendChild(linkText);
    remove.href = '#';
    remove.addEventListener('click', deleteItem);
    createLi.appendChild(remove);
    list.appendChild(createLi);
    document.getElementById('newItemText').value = '';

    function deleteItem() {
        createLi.remove();
    }
}