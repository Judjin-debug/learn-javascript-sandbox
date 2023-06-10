let user = {
    name: 'John',
    age: 30
};
  
const countObjProps = (obj) => {
    return Object.keys(obj).length;
};

console.log(countObjProps(user));