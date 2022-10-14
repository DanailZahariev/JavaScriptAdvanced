window.addEventListener('load', solve);

function solve() {

    let postTittle = document.getElementById('post-title');
    let postCategory = document.getElementById('post-category');
    let postContent = document.getElementById('post-content');
    let publishBtn = document.getElementById('publish-btn');
    let reviewList = document.getElementById('review-list');
    let publishedPost = document.getElementById('published-list');
    let clearBtn = document.getElementById('clear-btn');

    publishBtn.addEventListener('click', publishPost);

    function publishPost(evt) {
        evt.preventDefault();

        if (postTittle.value === '' || postCategory.value === '' || postContent.value === '') {
            return;
        }

        let createLi = document.createElement('li');
        createLi.classList.add('rpost');
        let article = document.createElement('article');
        let tittleH4 = document.createElement('h4');
        let categoryP = document.createElement('p');
        let contentP = document.createElement('p');
        tittleH4.appendChild(document.createTextNode(postTittle.value));
        categoryP.appendChild(document.createTextNode(`Category: ${postCategory.value}`));
        contentP.appendChild(document.createTextNode(`Content: ${postContent.value}`));
        let btnEdit = document.createElement('button');
        let btnApprove = document.createElement('button');
        btnEdit.appendChild(document.createTextNode('EDIT'));
        btnApprove.appendChild(document.createTextNode('APPROVE'));
        btnEdit.classList.add('action-btn', 'edit');
        btnApprove.classList.add('action-btn', 'approve');
        article.appendChild(tittleH4);
        article.appendChild(categoryP);
        article.appendChild(contentP);
        createLi.appendChild(article);
        createLi.appendChild(btnEdit);
        createLi.appendChild(btnApprove);
        reviewList.appendChild(createLi);

        postTittle.value = '';
        postCategory.value = '';
        postContent.value = '';

        btnEdit.addEventListener('click', editPost);

        function editPost(evt) {
            evt.target.parentNode.remove();

            postTittle.value = tittleH4.textContent;
            postCategory.value = categoryP.textContent.substring(10);
            postContent.value = contentP.textContent.substring(9);
        }

        btnApprove.addEventListener('click', approvePost);

        function approvePost(evt) {
            let currentPost = evt.target.parentElement;
            publishedPost.appendChild(currentPost);
            Array.from(currentPost.querySelectorAll('button')).forEach(btn => btn.remove());
        }

        clearBtn.addEventListener('click', clearPost);

        function clearPost() {
            Array.from(publishedPost.children).forEach(c => c.remove());
        }
    }
}