const createBot = require("./handlers/createBot");
const console = require("./handlers/console");
const deleteBot = require("./handlers/deleteBot");
const listBots = require("./handlers/listBots");
const updateBot = require("./handlers/updateBot");
const readBot = require("./handlers/readBot");

module.exports = [
  {
    name: "console",
    description: "Open the web console in your default browser.",
    handler: console,
  },
  {
    name: "create bot",
    description: "Create a new serverless discord bot.",
    handler: createBot,
  },
  {
    name: "read bot",
    description: "Read the details of one of your bots.",
    handler: readBot,
  },
  {
    name: "list bots",
    description: "List all of your bots.",
    handler: listBots,
  },
  {
    name: "delete bot",
    description: "Delete one of your bots.",
    handler: deleteBot,
  },
  {
    name: "update bot",
    description: "Update one of your bots.",
    handler: updateBot,
  },
];
