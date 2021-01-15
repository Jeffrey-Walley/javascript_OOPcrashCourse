// Constructors for objects - basically a function

function Book(title, author, year) { // must use a Capital Letter variable
    this.title = title;
    this.author = author;
    this.year = year;


    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
};

// Instantiate the object
const book1 = new Book('Blacksad', 'Juan Diaz Canales', '2013');
const book2 = new Book('Perspective Made Easy', 'Ernest R. Norling', '1948');

console.log(book1.getSummary);
console.log(book2); // shows the function in console log... should use prototype method