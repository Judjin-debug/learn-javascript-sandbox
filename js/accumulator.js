function Accumulator(startingValue = 0) {
    this.value = startingValue;
    this.read = function() {
        let read_1 = (msg) => +prompt(msg);
        this.value = read_1('Enter the increment value');
    };
    this.show = function() {
        return this.value;
    }
}

accumulator = new Accumulator(0);

accumulator.read();

alert( "Value=" + accumulator.show() );