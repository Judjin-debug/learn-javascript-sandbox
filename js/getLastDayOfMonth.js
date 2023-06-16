const getLastDayOfMonth = (year, month) => new Date(year, month, 0).getDate();

[...Array(24).keys()].map(v => console.log(`Displaying last day of Feb, ${v + 2000}: ${getLastDayOfMonth(v + 2000, 2)}`));