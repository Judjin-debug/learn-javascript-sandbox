// returns F(n)
function fibonacci(n) {
	if (n < 0)
		throw RangeError("There is no negative Fibonacci number");
	return fib(n)[0];
}

// returns tuples [F(n), F(n + 1)]
function fib(n) {

    if (n === 0) {
        return [0n, 1n];
    };

    const [a, b] = fib(Math.floor(n / 2));
    const c = a * (b * 2n - a);
    const d = a * a + b * b;
    if (n % 2 === 0) {
        return [c, d];
    } else {
        //F(2n) + F(2n + 1) = F(2n + 2)
        return [d, c + d];
    };

};

console.log(fibonacci(18)); //2584