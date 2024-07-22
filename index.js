


import chalk from 'chalk';

const validator = require("validator");

console.log(chalk.red.underline.inverse("false"));

const res = validator.isEmail('foo@bar.com');
console.log(res);

const colors = require("colors");
console.log("package.json".green);