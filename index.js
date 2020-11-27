const { default: Amplify } = require("aws-amplify");
const chalk = require("chalk");
const commands = require("./src/commands");
const vorpal = require("vorpal")();
const figlet = require("figlet");
const urls = require("./src/urls");
const clear = require("clear");

Amplify.configure({
  Auth: {
    identityPoolId: "us-east-1:fd0b70aa-1867-4a20-a5c1-d8458edf4653",
    region: "us-east-1",
    userPoolId: "us-east-1_Hpyw0BsYc",
    userPoolWebClientId: "2jvr6tmk5heivth48fms6dr1vu",
  },
  aws_appsync_graphqlEndpoint:
    "https://nipjawja3rfcjoqjcxajqdknqi.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS", // You have configured Auth with Amazon Cognito User Pool ID and Web Client Id
});

commands.forEach(({ name, description, handler }) => {
  vorpal.command(name, description).action(handler);
});

clear();

vorpal.delimiter(chalk.bold.yellow(">")).show();

// FIXME: incorporate this with logging
vorpal.log(chalk.magentaBright(figlet.textSync("serverless-discord", "Small")));
vorpal.log(chalk.bold("Bot servers as a service."));
vorpal.log("");
vorpal.log("Console: ", chalk.magenta(urls.CONSOLE));
vorpal.log("Docs:    ", chalk.magenta(urls.DOCS));
vorpal.log("Source:  ", chalk.magenta(urls.SOURCE));
vorpal.log("");
vorpal.log(
  chalk.italic(
    `Run the ${chalk.cyan(
      "create bot"
    )} command below to get started, or run ${chalk.cyan("help")} for details.`
  )
);
vorpal.log("");
