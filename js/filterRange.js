function filterRange(arr, a, b) {
    return arr.filter((v) => v >= a && v <=b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1

console.log( arr ); // 5,3,8,1