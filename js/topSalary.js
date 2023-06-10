let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const topSalary = (salaries) => {
    if (isEmpty(salaries)) return null;
    let max = 0;
    let result;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > max) {
            result = name;
            max = salary;
        };
    };
    return result;
};

console.log(topSalary(salaries));