// Objects //
// a collection of related data (properties) and 
// functions (methods). Often represented real-world entity
// ex. boo, movie, person.

const steve = {
    // properties = object states
        // these proterties describe the state 
        // of on object or its characteristics 
        firstName: 'steve',
        lastName: 'minecraft',
        age: 55,
        job: false,
        // object behaviors
        sayHello: function(){
            console.log('I am steve')
        },
        action: function (){
            console.log('chicken jockey')
        }
}
console.log(steve.lastName) // log 1
steve.sayHello() //log 2
steve.action() //log 3
const spongeBob = {
    firstName: 'spongeBob',
    lastName: 'squarepants',
    age: 26,
    job: true,
    sayHello: function(){
        console.log('I am mr.BOB')
    },
    action: function (){
        console.log('indoorssss, indoorsss')
    }
}
steve.sayHello() // log 4
spongeBob.sayHello() //log 5

let book = {
    title: 'to kill a mockingbird',
    author:'hi',
    displayInfo: function(){
        console.log(`${this.title} by ${this.author}`)
    },
}
book.displayInfo()

// Classes //
class Book{
    // dynamic methods structure
    // properties
    constructor(title,author,genre){
        // assigns itself the passed value
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    // method of displaying
    displayInfo(){
        console.log(`${this.title} by ${this.author} - Genre: ${this.genre}`)
    }
}

// using the methods based on info passed in 
let myBook = new Book('the hobbit', "j.r.r. tolkien", 'fantasy');
myBook.displayInfo()

let myBook2 = new Book('Dune', 'frank', 'si-fi')
myBook2.displayInfo()

// the difference between classes and functions
    // technically the same thing but more cleaner
    // syntax is the same too
    console.log(typeof Book)

// private properties //
// noted by a hashtag in the front of the property name

// class refacing (inheritance/ sub class)
class Vehicle{
    constructor(name){
        this.name = name
    }
    start(){
        console.log(`${this.name} is car`)
    }
}

class Tesla extends Vehicle{
    drive(){
        console.log(`${this.name} is driving`)
    }
}

let myTesla = new Tesla('Tesla')
myTesla.start()
myTesla.drive()