let date = new Date(2015, 0, 2);

function getDateAgo (date, days) {
    let temp = new Date(date.getTime());
    return new Date(temp.setDate(temp.getDate() - days)).getDate();
};

console.log(getDateAgo(date, 5));
console.log(getDateAgo(date, 370));
console.log(getDateAgo(date, 384));