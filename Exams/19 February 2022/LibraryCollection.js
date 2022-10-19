class LibraryCollection {

    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if (this.capacity === this.books.length) {
            throw new Error('Not enough space in the collection.');
        }
        this.books.push({bookName, bookAuthor, payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {

        let book = this.books.find(b => b.bookName === bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let book = this.books.find(b => b.bookName === bookName);
        if (!book) {
            throw new Error('The book, you\'re looking for, is not found.');
        }

        if (book.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.slice(this.books.indexOf(book), 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let result = '';
        if (bookAuthor === undefined) {
            let emptySlots = this.capacity - this.books.length;
            result += `The book collection has ${emptySlots} empty spots left.\n`;
            let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            sortedBooks.forEach(el => result += `${el.bookName} == ${el.bookAuthor} - ${el.payed === true ? `Has Paid` : `Not Paid`}.\n`);
        } else {
            let booksByAuthor = this.books.find(a => a.bookAuthor === bookAuthor);
            if (!booksByAuthor) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            result += `${booksByAuthor.bookName} == ${booksByAuthor.bookAuthor} - ${booksByAuthor.payed === true ? `Has Paid` : `Not Paid`}.`;
        }
        return result.trim();
    }
}