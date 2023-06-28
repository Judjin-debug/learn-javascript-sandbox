// setInterval variant
function printNumbersSI(from, to) {

    let i = from;
    let delay = 100;


    function go() {
        console.log(i);
        i++;
        if (i > to) clearInterval(timerId);
    };

    go();
    let timerId = setInterval(go, delay);

};


// setTimeout recursive call
function printNumbersST(from, to) {

    let i = from;
    let delay = 100;


    function go() {
        console.log(i);
        i++;
        if (!(i > to)) setTimeout(go, delay);
    };

    go();
};


let start = 5;
let end = 16;
let delay = 100;

let timerId =  setTimeout(function go(func) {
        console.log(`Executing function "${func.name}":`)
        func(start, end);
        if (func.name != 'printNumbersST') setTimeout(go, delay * (end - start + 1), printNumbersST);
    },
    0,
    printNumbersSI
);
