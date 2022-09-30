function create(words) {

    for (const word of words) {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.innerText = word;
        paragraph.style.display = 'none';
        div.appendChild(paragraph);
        div.addEventListener('click', showWords);
        document.getElementById('content').appendChild(div);
    }

    function showWords(evt) {
        if (evt.target.nodeName === 'P') {
            return;
        }
        let p = evt.target.children[0];
        p.style.display = 'block';
    }
}