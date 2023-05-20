function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

let arr = [5, 2, 1, -10, 8];

sortDescending(arr);

console.log( arr ); // 8, 5, 2, 1, -10