const sumTo = (n) => n === 1 ? 1 : n + sumTo(n - 1);

console.log(sumTo(10));