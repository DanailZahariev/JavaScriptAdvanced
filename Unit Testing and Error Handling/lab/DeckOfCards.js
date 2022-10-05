function deckOfCards(arr) {

    let result = [];
    try {


        arr.forEach(card => {
            let cardSuit = card.charAt(card.length - 1);
            let cardFace = card.slice(0, card.length - 1);
            result.push(validCards(cardFace, cardSuit).toString());
        });

        console.log(result.join(' '));

    } catch (e) {
        console.log(e.message)
    }


    function validCards(face, suit) {
        let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validCardSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }

        if (!validCardFaces.includes(face) || !validCardSuits.hasOwnProperty(suit)) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }
        return face + validCardSuits[suit];
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C'])