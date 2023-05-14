function truncate(str, maxlength) {
    if (maxlength > 3) {
        if (str.length > maxlength) {
            return str.slice(0, maxlength - 3) + "...";
        }
    }
    return str;
}

let testArr = ['Buy viagra with 50% discount', 'XXX watch now for free', 'Free barstools'];
let maxLen = 20;

testArr.forEach(element =>
    console.log(truncate(element, maxLen))
);