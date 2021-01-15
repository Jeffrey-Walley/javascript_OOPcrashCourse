// Object of Proto

const bookProto = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}


// Create the Object

/* const book1 = Object.create(bookProto);
book1.title = 'Blacksad';
book1.author = 'Juan Diaz Canales'
book1.year = '2009'; */

const book1 = Object.create(bookProto, {
    title: { value: 'Blacksad' },
    author: { value: 'Juan Diaz Canales' },
    year: { value: '2009' }
}); // does the same as above, just a different style of creating the object

console.log(book1);