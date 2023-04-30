function Calculator() {
    this.val_1 = 0;
    this.val_2 = 0;
    this.read = function() {
        let read_1 = (msg) => +prompt(msg);
        this.val_1 = read_1('Enter the first value');
        this.val_2 = read_1('Enter the second value');
    };
    this.sum = function () {
        return this.val_1 + this.val_2;
    };
    this.mul = function () {
        return this.val_1 * this.val_2;
    };
}

calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
