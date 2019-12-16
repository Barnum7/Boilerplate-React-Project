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