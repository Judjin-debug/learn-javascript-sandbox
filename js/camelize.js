function camelize(str) {
    return str.split('-').map((v, i) => v.length > 0 && i > 0? v[0].toUpperCase() + v.slice(1) : v).join('');
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));