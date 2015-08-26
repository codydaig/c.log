'use strict';

var chalk = require('chalk');

var clog = function(value) {
  console.log(value);
};

clog.green = function(value) {
  console.log(chalk.green(value));
};

clog.blue = function(value) {
  console.log(chalk.blue(value));
};

clog.red = function(value) {
  console.log(chalk.red(value));
};

clog.yellow = function(value) {
  console.log(chalk.yellow(value));
};

clog.magenta = function(value) {
  console.log(chalk.magenta(value));
};

clog.cyan = function(value) {
  console.log(chalk.cyan(value));
};

clog.white = function(value) {
  console.log(chalk.white(value));
};

clog.gray = function(value) {
  console.log(chalk.gray(value));
};

module.exports = clog;
