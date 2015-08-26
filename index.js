'use strict';

var chalk = require('chalk');

var c.log = module.exports = {};

c.log.green = function(value) {
  console.log(chalk.green(value));
};

c.log.blue = function(value) {
  console.log(chalk.blue(value));
};

c.log.red = function(value) {
  console.log(chalk.red(value));
};

c.log.yellow = function(value) {
  console.log(chalk.yellow(value));
};

c.log.magenta = function(value) {
  console.log(chalk.magenta(value));
};

c.log.cyan = function(value) {
  console.log(chalk.cyan(value));
};

c.log.white = function(value) {
  console.log(chalk.white(value));
};

c.log.gray = function(value) {
  console.log(chalk.gray(value));
};
