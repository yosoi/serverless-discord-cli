const chalk = require("chalk");

function error(message) {
  console.log(chalk.red("Error: " + message));
}

function info(message) {
  console.log(chalk.cyan(message));
}

function success(message) {
  console.log(chalk.green("Success: " + message));
}

function warning(message) {
  console.log(chalk.yellow("Warning: " + message));
}

module.exports = { error, info, success, warning };
