function getSecondsToTomorrow() {
    let date = new Date(Date.now());
    return 24 * 60 * 60 - (date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 60 * 60);
};

console.log(getSecondsToTomorrow());