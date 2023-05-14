function ucFirst (str) {
    return str[0].toUpperCase() + str.slice(1);
};

let testStringArray = ['march', 'april', 'may'];

testStringArray.forEach(element => {
    console.log(ucFirst(element));
});