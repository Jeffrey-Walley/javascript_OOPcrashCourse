// Constructors for objects - basically a function

function Book(title, author, year) { // must use a Capital Letter variable
    this.title = title;
    this.author = author;
    this.year = year;
};

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
};

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Arthur', '2018', 'Jan');

// console.log(mag1);
// console.log(mag1.getSummary()); // shows that it is not a valid function

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

Magazine.prototype.constructor = Magazine;
console.log(mag1);