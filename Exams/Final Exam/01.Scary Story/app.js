window.addEventListener("load", solve);

function solve() {

    let publishBtn = document.getElementById('form-btn');
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let storyTitle = document.getElementById('story-title');
    let genre = document.getElementById('genre');
    let storyMessage = document.getElementById('story');
    let previewList = document.getElementById('preview-list');
    let mainDiv = document.getElementById('main');

    publishBtn.addEventListener('click', publishStory);

    function publishStory(evt) {

        evt.preventDefault();

        if (firstName.value === '' || lastName.value === '' || age.value === ''
            || storyTitle.value === '' || genre.value === '' || storyMessage.value === '') {
            return;
        }

        let previewLi = createHtmlElements('li');
        previewLi.classList.add('story-info');
        let previewArticle = createHtmlElements('article');
        let previewNamesH4 = createHtmlElements('h4', `Name: ${firstName.value} ${lastName.value}`);
        let tempFirstName = firstName.value;
        let tempLastName = lastName.value;
        let tempAge = age.value;
        let tempStoryTitle = storyTitle.value;
        let tempGenre = genre.value;
        let previewAge = createHtmlElements('p', `Age: ${age.value}`);
        let previewTitle = createHtmlElements('p', `Title: ${storyTitle.value}`);
        let previewGenre = createHtmlElements('p', `Genre: ${genre.value}`);
        let previewStoryP = createHtmlElements('p', `${storyMessage.value}`);
        previewArticle.appendChild(previewNamesH4);
        previewArticle.appendChild(previewAge);
        previewArticle.appendChild(previewTitle);
        previewArticle.appendChild(previewGenre);
        previewArticle.appendChild(previewStoryP);
        let previewSaveBtn = createHtmlElements('button', 'Save Story');
        previewSaveBtn.classList.add('save-btn');
        let previewEditBtn = createHtmlElements('button', 'Edit Story');
        previewEditBtn.classList.add('edit-btn');
        let previewDeleteBtn = createHtmlElements('button', 'Delete Story');
        previewDeleteBtn.classList.add('delete-btn');
        previewLi.appendChild(previewArticle);
        previewLi.appendChild(previewSaveBtn);
        previewLi.appendChild(previewEditBtn);
        previewLi.appendChild(previewDeleteBtn);
        previewList.appendChild(previewLi);
        publishBtn.setAttribute('disabled', 'disabled');
        firstName.value = '';
        lastName.value = '';
        storyTitle.value = '';
        age.value = '';
        genre.value = '';
        storyMessage.value = '';

        previewEditBtn.addEventListener('click', (evt) => {
            evt.target.parentElement.remove();
            publishBtn.removeAttribute('disabled');
            firstName.value = tempFirstName;
            lastName.value = tempLastName;
            age.value = tempAge;
            storyTitle.value = tempStoryTitle;
            genre.value = tempGenre;
            storyMessage.value = previewStoryP.textContent;
        });

        previewSaveBtn.addEventListener('click', () => {
            let savedH1 = createHtmlElements('h1', 'Your scary story is saved!');
            mainDiv.innerHTML = '';
            mainDiv.appendChild(savedH1);
        });

        previewDeleteBtn.addEventListener('click', (evt) => {
            evt.target.parentElement.remove();
            publishBtn.removeAttribute('disabled');
        });

        function createHtmlElements(tagName, content) {
            let element = document.createElement(tagName);
            if (content) {
                element.textContent = content;
            }
            return element;
        }
    }
}
