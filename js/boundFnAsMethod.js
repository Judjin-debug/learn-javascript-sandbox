function f() {
    console.log( this ); // ?
}
  
let user = {
    g: f.bind(null)
};
  
user.g();

// it will still call with "null" context