function f(a) {
    console.log(a)
}


function throttle(func, latency) {

    let isCooldown = false;
    let timerId;
    
    function wrapper(...args) {      
        if (isCooldown) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {isCooldown = false; return func.apply(this, args)}, latency);
        } else {
            isCooldown = true;
            timerId = setTimeout(() => isCooldown = false, latency);
            return func.apply(this, args);
        };
    };


    return wrapper;

};

  
// f1000 sends f calls at most once per 1000 ms
let f1000 = throttle(f, 1000);
  
f1000(1); // shows 1
f1000(2); // (throttled, 1000 ms didn't elapse)
f1000(3); // (throttled, 1000 ms didn't elapse)
  
// when 1000 elapsed ...
// ...show 3, intermediate value 2 was ignored