function f() {
    console.log(this.name);
}
  
f = f.bind( {name: "Vasya"} ).bind( {name: "Petya" } );
  
f();

// you can make a new bind, but not change the existing one, because it returns "exotic" object that won't change it's binds