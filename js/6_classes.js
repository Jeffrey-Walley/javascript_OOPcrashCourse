// CLASSES with OOP

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    };

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    };

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    };

    static topBookStore() {
        return 'Walley\'s Pop Comics';
    };
};



// Instantiate Object with
const book1 = new Book('Blacksad', 'Juan Diaz Canales', '2009');

// console.log(book1);
// book1.revise('2021'); //add a revise value
// console.log(book1) // console log with revision information added to the object

console.log(Book.topBookStore());
// --static method does not have to be instantiated