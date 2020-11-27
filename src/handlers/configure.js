const config = require("../config")();
const { success, error } = require("../logging");
const prompts = require("../prompts");

module.exports = function (args, callback) {
  this.prompt(prompts.API_KEY, (response) => {
    return config.set(response);
  })
    .then(() => {
      success("Your API Key has been stored locally.");
    })
    .catch(() => {
      error("Unable to store your API Key.");
    })
    .finally(() => {
      callback();
    });
};
