function wordUppercase(text) {

    let result = text.toUpperCase().match(/\w+/g).join(', ');

    console.log(result)
}

wordUppercase('Hi, how are you?')
wordUppercase('hello')