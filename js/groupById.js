function groupById(users) {
    outputObject = {};
    for (let user of users) {
        let key = user.id;
        let value = user;
        outputObject[key] = value;
    };
    return outputObject;
};

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
  
let usersById = groupById(users);

console.log(JSON.stringify(usersById, null, 2));