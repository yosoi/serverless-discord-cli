const open = require("open");
const { info } = require("../logging");
const urls = require("../urls");

module.exports = function (args, callback) {
  info("Opening web console in your default browser...");
  open(urls.CONSOLE);
  callback();
};
