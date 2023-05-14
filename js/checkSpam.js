const FILTERWORDS = ['viagra', 'xxx'];

function checkSpam(str) {
    let lowercaseStr = str.toLowerCase();
    for (let i = 0; i < FILTERWORDS.length; i++) {
        if (lowercaseStr.includes(FILTERWORDS[i])) return true;
    };
    return false;
};

let testArr = ['Buy viagra with 50% discount', 'XXX watch now for free', 'Free barstools'];

testArr.forEach(element =>
    console.log(checkSpam(element))
);