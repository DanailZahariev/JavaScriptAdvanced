class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250};
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);
        let articleM = Object.keys(this.possibleArticles).find(a => a === articleModel);

        if (!articleM) {
            throw new Error('This article model is not included in this gallery!');
        }

        let article = this.listOfArticles.find(a => a.articleName === articleName);

        if (!article) {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            });
        } else {
            if (article.articleModel === articleModel && article) {
                article.quantity += quantity;
            }
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }


    inviteGuest(guestName, personality) {

        let guest = this.guests.find(g => g.guestName === guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`)
        }

        let guestPoints = 50;

        if (personality === 'Vip') {
            guestPoints = 500;
        } else if (personality === 'Middle') {
            guestPoints = 250;
        }

        this.guests.push({guestName, guestPoints, purchaseArticle: 0});

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        let article = this.listOfArticles.find(a => a.articleName === articleName);

        if (!article) {
            throw new Error(`This article is not found.`);
        } else {
            if (article.articleModel !== articleModel) {
                throw new Error(`This article is not found.`);
            }
            if (article.quantity === 0) {
                return `The ${articleName} is not available.`;
            }
        }

        let guest = this.guests.find(g => g.guestName === guestName);

        if (!guest) {
            return 'This guest is not invited.';
        }

        let articlePoints = this.possibleArticles[articleModel];
        let necessaryPoints = guest.points - articlePoints;
        if (necessaryPoints < 0) {
            return 'You need to more points to purchase the article.';
        }
        guest.points -= necessaryPoints;
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${articlePoints} points.`
    }

    showGalleryInfo(criteria) {

        let result = '';

        if (criteria === 'article') {
            result += 'Articles information:\n';
            this.listOfArticles.forEach(a => result += `${a.articleModel} - ${a.articleName} - ${a.quantity}\n`);
        } else if (criteria === 'guest') {
            result += 'Guests information:\n'
            this.guests.forEach(g => result += `${g.guestName} - ${g.purchaseArticle}\n`);
        }
        return result.trim();
    }
}


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));


// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));