const fs = require('fs');
console.log("Started Reading--" + Date.now());
fs.readFile('Readme.txt', (err, data) => {
    if (err) throw err;
    console.log("Finished Reading--" + Date.now());
});
console.log("Done!!");
