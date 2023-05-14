function currencyValue(str) {
    return +str.slice(1);
}

let testArr = ['$120', '¥10000', '₪9999'];

testArr.forEach(element => {
    console.log(currencyValue(element))
});