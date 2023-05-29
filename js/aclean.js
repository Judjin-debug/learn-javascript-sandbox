function aclean (array) {


    const eqSet = (xs, ys) =>
        xs.size === ys.size &&
        [...xs].every((x) => ys.has(x));

    let aset = array.map(v => new Set(v.toLowerCase().split('')));
    let alen = array.length;
    let ares = array.slice();
    for (let i = 0; i < alen - 1; i++) {
        for (let j = alen - 1; j > i; j--) {
            if (eqSet(aset[i], aset[j])) {
                ares.splice(j, 1);
                aset.splice(j, 1);
                alen--;
            };
        };
    };
    return ares;
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
 
console.log(aclean(arr));