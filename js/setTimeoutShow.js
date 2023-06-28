let i = 0;

setTimeout(() => console.log(i), 100); // ?

// any setTimeout call is over only after the current instructions finish
for(let j = 0; j < 1000000000; j++) {
  i++;
};