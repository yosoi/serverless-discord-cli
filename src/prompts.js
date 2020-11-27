const validator = require("validator");

module.exports = {
  BOT_NAME: {
    default: "My Serverless Discord Bot",
    type: "input",
    name: "name",
    message: "Name your bot:",
    validate: (value) => {
      return !validator.isEmpty(value);
    },
  },
  BOT_PREFIX: {
    default: "!",
    type: "input",
    name: "prefix",
    message: "Pick a command prefix:",
    validate: (value) => {
      return !validator.isEmpty(value);
    },
  },
  BOT_TARGET: {
    type: "input",
    name: "target",
    message: "Provide a target endpoint:",
    validate: (value) => {
      return validator.isURL(value);
    },
  },
  BOT_TOKEN: {
    type: "password",
    name: "token",
    message: "Enter your Discord token:",
    validate: (value) => {
      return !validator.isEmpty(value);
    },
  },
  EMAIL: {
    type: "input",
    name: "email",
    message: "Enter your email:",
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  PASSWORD: {
    type: "password",
    name: "password",
    message: "Enter your password:",
    validate: (value) => {
      return !validator.isEmpty(value);
    },
  },
};
