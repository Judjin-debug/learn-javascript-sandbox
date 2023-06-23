const inBetween = (a, b) => (val) => val >= a && val <= b;

const inArray = (arr) => (val) => arr.includes(val);

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// the idea is it's the function with set vars in the outer env (bounds, array) that get passed as an arg function for a filter
// this is the purpose of using closures in this example