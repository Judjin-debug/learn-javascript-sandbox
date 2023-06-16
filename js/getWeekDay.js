const DAYS = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const getWeekDay = (date) => DAYS[date.getDay()];

let date = new Date(2012, 0, 3)

console.log(getWeekDay(date));