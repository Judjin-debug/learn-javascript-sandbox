function debounce(func, threshold) {

    let checkpoint = 0;
    
    function wrapper(...args) {
        let currentTime = Date.now();
        if (currentTime - checkpoint >= threshold) {
            checkpoint = currentTime;
            return func.apply(this, args);
        }
    };

    return wrapper;

}


let f = debounce(console.log, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);

// function debounce(f, ms) {

//     let isCooldown = false;
  
//     return function() {
//         if (isCooldown) return;
  
//         f.apply(this, arguments);
  
//         isCooldown = true;
  
//        setTimeout(() => isCooldown = false, ms);
//     };
  
// }