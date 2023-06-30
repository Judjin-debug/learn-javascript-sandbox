function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;
  
let bound = sayHi.bind({
    name: "Vasya"
});
  
console.log( bound.test ); // bound is another object, so it won't have 'test' property