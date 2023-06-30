function f(x) {
    console.log(x);
};


function delay(func, latency) {

    function wrapper(...args) {
        let result;
        setTimeout(() => {result = func.apply(this, args)}, latency);
        return result;
    };

    return wrapper;
}
  
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
  
f1000("test");
f1500("test");