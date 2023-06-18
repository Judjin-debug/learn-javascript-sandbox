function formatDate(time) {

    function zeroPad(num) {
        // date getters return numbers
        if (num < 10) {
            return `0${num}`;
        };
        return `${num}`;
    };

    let delta = Date.now() - time.getTime();
    let result;
    if (delta < 1000) {
        result = `Right now`;
    } else if (delta < 1000 * 60) {
        result = `${new Date(delta).getSeconds()} seconds ago`;
    } else if (delta < 1000 * 60 * 60) {
        result = `${new Date(delta).getMinutes()} minutes ago`;
    } else {
        result = `${zeroPad(time.getMonth() + 1)}.${zeroPad(time.getDate())}.${time.getFullYear()}, ${zeroPad(time.getHours())}:${zeroPad(time.getMinutes())}`;
    };
    return result;
};

console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)) );
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );