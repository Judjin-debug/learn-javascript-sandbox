function getMaxSubSum(array) {
    let accumulator = 0;
    if (array.length < 1) return null;
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        
        for (let j = i; j < array.length; j++) {
            accumulator = 0;
            for (let k = i; k < j + 1; k++) {
                accumulator += array[k]
            }
            if (accumulator > max) max = accumulator;
        }
    };
    return max;
};


console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));