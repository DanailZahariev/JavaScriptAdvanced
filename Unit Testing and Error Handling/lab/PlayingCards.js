function playingCards(cardFace, cardSuits) {

    let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validCardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }

    if (!validCardFaces.includes(cardFace)) {
        throw new Error('Error');
    }

    if (!validCardSuits.hasOwnProperty(cardSuits)) {
        throw new Error('Error');
    }

    return {
        cardFace,
        cardSuits,
        toString() {
            return this.cardFace + validCardSuits[this.cardSuits]
        }
    }
}

console.log(playingCards('A', 'S').toString())