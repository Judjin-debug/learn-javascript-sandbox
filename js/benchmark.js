function benchmark(func, arg) {
    const t0 = performance.now();
    console.log(func(arg));
    const t1 = performance.now();
    console.log(`Call to ${func.name} took ${t1 - t0} milliseconds.`);
};