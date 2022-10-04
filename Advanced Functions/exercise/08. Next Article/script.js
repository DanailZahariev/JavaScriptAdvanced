function getArticleGenerator(articles) {

    let myArticles = Array.from(articles);
    let articlesContent = document.getElementById('content');

    return () => {
        if (!myArticles.length) {
            return
        }
        let currentArticle = myArticles.shift();
        articlesContent.innerHTML += `<article>${currentArticle}</article>`
    }
}