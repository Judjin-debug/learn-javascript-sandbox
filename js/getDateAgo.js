let date = new Date(2015, 0, 2);

function getDateAgo (date, days) {
    const prevDate = new Date(date - days * 1000 * 60 * 60 * 24);
    return prevDate.getDate();
};

console.log(getDateAgo(date, 5));
console.log(getDateAgo(date, 370));
console.log(getDateAgo(date, 384));