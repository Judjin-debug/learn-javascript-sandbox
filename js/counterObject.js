function Counter() {
    let count = 0;
  
    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}
  
let counter = new Counter();
  
console.log( counter.up() ); // ?
console.log( counter.up() ); // ?
console.log( counter.down() ); // ?

// both functions share the same lexical environment, so nothing is wrong