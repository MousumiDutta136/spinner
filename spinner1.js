// process.stdout.write('hello from spinner1.js... \rheyyy\n');

let drawArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\', '\r|   '];
let delay = 0;

for(const element of drawArray) {
  setTimeout(() => {
    process.stdout.write(element);
  }, delay);
  delay += 1000;  
}
setTimeout(() => {
  console.log("");
}, 10000);


