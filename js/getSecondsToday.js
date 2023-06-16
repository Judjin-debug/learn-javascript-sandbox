function getSecondsToday() {
    let date = new Date(Date.now());
    return date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 60 * 60;
};

console.log(getSecondsToday());