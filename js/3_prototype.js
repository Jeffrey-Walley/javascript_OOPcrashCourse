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

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

// Revise / Change Year -- adds revised year to book
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate the object
const book1 = new Book('Blacksad', 'Juan Diaz Canales', '2013');
const book2 = new Book('Perspective Made Easy', 'Ernest R. Norling', '1948');

// console.log(book2); // gives, title, author, and year without showing the function
// console.log(book2.getAge()); // uses the above prototype function to give the age of the book for some reason

console.log(book2); // -- should add a revised year and true