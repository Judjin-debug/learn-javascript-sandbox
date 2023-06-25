function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    };

    counter.set = function(arg) {
        count = arg;
    };

    counter.decrease = function() {
        count--;
    };
  
    return counter;
}
  
let counter = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1
  
counter.set(10); // set new counter value
  
console.log( counter() ); // 10
  
counter.decrease(); // lower counter value by 1
  
console.log( counter() ); // 10 (instead of 11)