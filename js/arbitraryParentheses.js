function sum(a) {

    if (!sum.val) {
        sum.val = a;
    } else {
        sum.val += a;
    }

    sum.valueOf = function() {
        let temp = sum.val;
        sum.val = 0;
        return temp;
    }

    return sum;

};

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);