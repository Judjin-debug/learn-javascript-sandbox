styles = ['jazz', 'blues'];

console.log(styles);

styles.push('rock-and-roll');

console.log(styles);

styles[Math.floor(styles.length / 2)] = 'classical music';

console.log(styles);

deletedElement = styles.shift();

console.log(deletedElement);

styles.unshift('rap', 'reggae');

console.log(styles);