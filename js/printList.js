function printList(list) {
    console.log(list.value);
    if (list.next !== null) printList(list.next);
};

function printListLoop(list) {
    console.log(list.value);
    while (list.next !== null) {
        list = list.next;
        console.log(list.value);
    }
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

