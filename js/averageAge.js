function getAverageAge(users) {
    let accumulator = 0;
    for (let user of users) {
        accumulator += user.age;
    };
    return accumulator / users.length;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28