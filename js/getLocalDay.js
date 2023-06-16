const getLocalDay = (date) => {
    let rawNum = date.getDay();
    if (rawNum !== 0) {
        return rawNum;
    }
    return 7;
};

for (let i = 1; i < 8; i++) {
    let date = new Date(2012, 0, i);
    console.log(getLocalDay(date));
};


