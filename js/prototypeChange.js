function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true

// 1

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats ); // true, redefining prototype doesn't affect existing rabbit object

// 2

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit.eats ); // false, because Rabbit prototype is linked

// 3

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

rabbit = new Rabbit();

delete rabbit.eats;

console.log( rabbit.eats ); // true, because rabbit object doesn't have eats property

// 4

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // undefined, because ref got deleted from prototype