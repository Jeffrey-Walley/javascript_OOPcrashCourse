/* javascript - almost everything is an object == can use methods on almost anything

  -- methods are functions in the object */

// const s1 = 'howdy heroes';
// console.log(typeof s1);

// const s2 = new String('Hometown Friends');
// console.log(typeof s2);

// console.log(window);
// console.log(navigator.appVersion);


// Object Literal
/* const book1 = {
    title: 'Blacksad',
    author: 'Juan Diaz Canales',
    year: '2013'
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}; */

const book1 = {
    title: 'Blacksad',
    author: 'Juan Diaz Canales',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Perspective Made Easy',
    author: 'Ernest R. Nordling',
    year: '1948',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log(book1); // gives object info in array like format
// console.log(book1.title); // gives title
console.log(Object.values(book2));
console.log(Object.keys(book2));