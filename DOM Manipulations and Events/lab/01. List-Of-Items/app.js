function addItem() {

    let text = document.getElementById('newItemText').value;
    let createLi = document.createElement('li');
    createLi.appendChild(document.createTextNode(text));

    document.getElementById('items').appendChild(createLi);
    document.getElementById('newItemText').value = '';
}