const isNumeric = (num) => (typeof(num) === 'number' || typeof(num) === 'string' && 
                            num.trim() !== '') && !isNaN(num);


function Calculator() {
    this.calculate = function(str) {
        if (typeof str != 'string') {
            console.log('Calculator: error code 0');
            console.log('Input isn\'t string');
            return NaN;
        };
        if (str.trim() === '') {
            console.log('Calculator: error code 1');
            console.log('String is empty/whitespace only');
            return NaN;
        };
        parts = str.split(' ');
        if (parts.length !== 3) {
            console.log('Calculator: error code 2');
            console.log('Wrong number of args/no space delimiter');
            return NaN;
        }
        if (!(isNumeric(parts[0]) && isNumeric(parts[2]))) {
            console.log('Calculator: error code 3');
            console.log('Operands aren\'t numbers');
            return NaN;
        };
        let operatorIndex = this.operators.indexOf(parts[1]);
        if (operatorIndex >= 0) {
            return this.functions[operatorIndex](+parts[0], +parts[2]);
        }
        console.log('Calculator: error code 4');
        console.log('Operator not recognized/unknown error');
        return NaN;
    };
    this.operators = ['+', '-'];
    this.functions = [(a, b) => a + b, (a, b) => a - b];
    this.addMethod = function(methodName, methodItself) {
        if (typeof methodName !== 'string' || methodName.trim() === '' || methodName.indexOf(' ') > -1) {
            console.log('Calculator: error code 5');
            console.log('Method name isn\'t a legal string');
            return;
        };
        if (typeof methodItself === 'function') {
            this.operators.push(methodName);
            this.functions.push(methodItself);
            return;
        };
        console.log('Calculator: error code 6');
        console.log('A non-method passed/unknown error');
        return;
    };
}

let calc = new Calculator();
console.log(calc.calculate("1 + 2")); // 3
console.log(calc.calculate("5 - 3")); // 2
console.log(calc.calculate("17 + 6")); // 23
console.log(calc.calculate("17.666 + 99")); // 116.666

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

console.log(powerCalc.calculate("77 / 11")); // 7
console.log(powerCalc.calculate("23 * 3")); // 69
console.log(powerCalc.calculate("7 ** 0")); // 1
console.log(powerCalc.calculate("10 ** -1")); // 1
console.log(powerCalc.calculate("1 / 0")); // Infinity
