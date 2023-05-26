function uniqueSet (array) {
    let set = new Set(array);
    return Array.from(set);
};

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( uniqueSet(values) );