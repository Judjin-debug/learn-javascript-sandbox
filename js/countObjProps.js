let user = {
    name: 'John',
    age: 30
};
  
const countObjProps = (obj) => {
    let count = 0;
    for (let keys of Object.keys(obj)) {
        count++;
    };
    return count;
};

console.log(countObjProps(user));