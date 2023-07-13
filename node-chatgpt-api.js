const { Configuration, OpenAIApi } = require("openai");
var readline = require("readline");
require("dotenv").config();

const configuration = new Configuration({
    organization: "org-6dpGoG8EiNbjtVHbnwmRQ9S1",
    apiKey: "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",
  });
const openai = new OpenAIApi(configuration);
const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
userInterface.prompt();
userInterface.on("line", async (input) => {
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      })
      .then((res) => {
        console.log(res.data.choices[0].message.content);
        userInterface.prompt();
      })
      .catch((e) => {
        console.log(e);
      });
  });  