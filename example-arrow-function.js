var names = ['Brian', 'Erika', 'Franklin', 'Elwood', 'Olivia'];

// Traditional anonymous function
names.forEach(function (name) {
    console.log('Hello', name);
});

// ES6 Arrow functions
names.forEach((name) => {
    console.log("Greetings", name);
});

// ES6 single-line arrow functions
names.forEach((name) => {console.log(name)});

// This will be undefined says hi. Anonymous functions don't inherit scope
var person = {
    name: 'Brian',
    greet: function () {
        names.forEach(function (name) {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

// This works because arrow functions inherit scope
var personWorks = {
    name: 'Brian',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
};

person.greet()
personWorks.greet()

// add arrow format
var addStatement = (a,b) => {
    return a + b
};

// Add expression format
var addExpression = (a,b) =>  a + b;

console.log(addStatement(2,7));
console.log(addExpression(23,19));
