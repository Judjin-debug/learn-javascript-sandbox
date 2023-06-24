function byField(fieldName) {
    return function(a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1;
    };
};

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function printArray (arr) {
    console.log("Displaying array:");
    for (let item of arr) {
        console.log(item);
    }
};

function sortBy(array, fieldName) {
    console.log(`--- Sort by ${fieldName} ---`)
    array.sort(byField(fieldName));
    printArray(array);
}

sortBy(users, 'name');
sortBy(users, 'age');