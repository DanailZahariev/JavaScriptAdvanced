function squareStars(num) {

    const stars = '* '

    for (let i = 0; i < num; i++) {
        console.log(stars.repeat(num))
    }
}

squareStars(7)
squareStars(5)