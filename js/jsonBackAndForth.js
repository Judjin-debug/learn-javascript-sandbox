let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    job: null
};

let studentJSON = JSON.stringify(student);
console.log(typeof studentJSON);
console.log(studentJSON);

let studentFromJSON = JSON.parse(studentJSON);
console.log(typeof studentFromJSON);
console.log(studentFromJSON);