const { API } = require("aws-amplify");
const chalk = require("chalk");
const { authenticate } = require("../authentication");
const prompts = require("../prompts");

// XXX: support custom headers
module.exports = function (args, callback) {
  authenticate(this)
    .then(() => {
      return this.prompt([
        prompts.BOT_NAME,
        prompts.BOT_TOKEN,
        prompts.BOT_PREFIX,
        prompts.BOT_TARGET,
      ]).then(({ name, prefix, target, token }) => {
        this.log(name, prefix, target, token);
        this.log(chalk.yellow("Spawning new serverless discord bot..."));
        return API.graphql({
          query: /* GraphQL */ `
            mutation CreateBot(
              $input: CreateBotInput!
              $condition: ModelBotConditionInput
            ) {
              createBot(input: $input, condition: $condition) {
                id
                name
                prefix
                token
                target
                headers
                createdAt
                updatedAt
                version
                owner
              }
            }
          `,
          variables: {
            input: { name: name, prefix: prefix, target: target, token: token },
          },
        })
          .then((response) => {
            this.log(
              chalk.green(
                "Success! Your bot will come online in the next few minutes."
              )
            );
            // TODO handle success and failure
          })
          .catch((error) => {
            this.log(error);
          });
      });
    })
    .catch(() => {})
    .finally(() => {
      callback();
    });
};
