function unique(arr) {
    let outputArray = [];
    for (let element of arr) {
        if (!outputArray.includes(element)) {
            outputArray.push(element);
        }
    };
    return outputArray;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O