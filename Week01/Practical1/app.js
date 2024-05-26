const path = require('node:path');

const notes = 'C:/Users/limju/Desktop/BED2024/Week01/Practical1/files/text.txt';

path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt


const fs = require('node:fs');

fs.readFile(notes, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});



const chalk = require('chalk');
console.log(chalk.yellow('your mudder!'));



