function printList(list) {  
    if (list.next !== null) printList(list.next);
    console.log(list.value);
};

function printListLoop(list) {
    let arr = [];
    arr.push(list);
    while (list.next !== null) {    
        list = list.next;
        arr.push(list);
    };
    while (arr.length > 0) {
        console.log(`${arr.pop().value}`)
    };
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }       
};

console.log(`Recursion:`);
printList(list);

console.log(`Loop:`);
printListLoop(list);