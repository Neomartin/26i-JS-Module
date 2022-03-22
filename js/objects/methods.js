const movie1 = {
    name: 'The Lord of the Rings',
    year: 2001,
    gen: ['Action', 'Adventure'],
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    resume: function() {
        return `This movie ${this.name} was released in ${this.year} and it is a ${this.gen}`
    },
    calculateAge: function() {
        const currentYear = new Date().getFullYear();
        const diff = currentYear - this.year;
        return `La pelicula ${this.name} tiene ${diff} años de antigüedad`;
    }
}

const movie2 = {
    name: 'The Matrix',
    year: 1999,
    ['gen-2']: ['Action', 'Sci-Fi'],
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    rating: 'R',

    resume: function() {
        return `This movie ${this.name} was released in ${this.year} and it is a ${this.gen}`
    },
    calculateAge: function() {
        const currentYear = new Date().getFullYear();
        const diff = currentYear - this.year;
        return `La pelicula ${this.name} tiene ${diff} años de antigüedad`;
    }    
}

const movies = [ movie1, movie2 ]

const objectValues = Object.values(movie2)
const objectKeys = Object.keys(movie2)
const objectEntries = Object.entries(movie2)

console.log(objectEntries)