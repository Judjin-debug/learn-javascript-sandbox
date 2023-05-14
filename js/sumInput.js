function sumInput_old() {
    let sum = 0;
    let addend = 0;
    let i = 0;
    do {
        sum += addend;
        addend = prompt('Input the next number or cancel');
        if (addend === null || addend === "") break;
        addend = +addend;
        i++;
    } while (typeof addend === 'number' && isFinite(addend) && i < 1000);
    return sum;
};


function numArray() {
    let array = [];
    let addend = "";
    let numAddend = 0;
    let i = 0;
    while (i < 1000) {
        addend = prompt('Input the next number or cancel');
        if (addend === null || addend === "") break;
        numAddend = +addend;
        if (typeof numAddend === 'number' && isFinite(numAddend)) {
            array.push(numAddend);
        } else {
            break;
        }
        i++;
    };
    return array;
}


function sumInput () {
    let array = numArray();
    return array.reduce((a, b) => a + b);
}

sumInput();