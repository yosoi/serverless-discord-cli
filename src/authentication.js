const { Auth } = require("aws-amplify");
const chalk = require("chalk");
const prompts = require("./prompts");

async function authenticate(command) {
  return Auth.currentAuthenticatedUser().catch(() => {
    return logIn(command);
  });
}

async function logIn(command) {
  // FIXME: incorporate this with logging
  command.log(chalk.yellow("Sign in to continue."));

  return command
    .prompt([prompts.EMAIL, prompts.PASSWORD])
    .then(({ email, password }) => {
      command.log(chalk.yellow("Authenticating..."));
      return Auth.signIn(email, password);
    })
    .then(() => {
      command.log(chalk.green("Success! Logged in."));
    })
    .catch(() => {
      command.log(chalk.red("Error! Access denied."));
      throw "Error! Access denied.";
    });
}

module.exports = { authenticate, logIn };
