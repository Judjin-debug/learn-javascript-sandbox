function aclean (array) {


    function strToMap (str) {
        let map = new Map();
        let lcStr = str.toLowerCase();
        for (char of lcStr) {
            if (!map.has(char)) {
                map.set(char, 1);
            } else {
                let val = map.get(char);
                map.set(char, ++val);
            };
        };
        return map;
    };


    function mapEq (xm, ym) {
        if (!(xm.size === ym.size)) return false;
        for (let key of xm.keys()) {
            if (!(ym.has(key) && xm.get(key) === ym.get(key))) return false;
        }
        return true;
    };

    let amap = array.map(v => strToMap(v));
    let alen = array.length;
    let ares = array.slice();
    for (let i = 0; i < alen - 1; i++) {
        for (let j = alen - 1; j > i; j--) {
            if (mapEq(amap[i], amap[j])) {
                ares.splice(j, 1);
                amap.splice(j, 1);
                alen--;
            };
        };
    };
    return ares;

};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
 
console.log(aclean(arr));