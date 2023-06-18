const sumTo = (n) => n === 1 ? 1 : n + sumTo(n - 1);

console.log(sumTo(10));

const sumTo_formula = (n) =>  (1 + n) * n / 2;

console.log(sumTo_formula(10));