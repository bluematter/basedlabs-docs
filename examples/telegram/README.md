## Getting Started

This example uses typescript, you will edit the src/index.ts file. Then you can build using

```
yarn build
```

This command will add an index.js file to the /dist folder. Then you can run

```
yarn start
```

This command will start your node.js server and will listen for Telegram messages

## Setting up your API keys

To setup your bot api key follow these steps

### Create a Telegram Bot and Get the Token:

- **Create the Bot**: Open Telegram and search for the “BotFather” bot. Start a chat with it and use the command /newbot. Follow the instructions provided by BotFather to create your bot. Once your bot is created, you will receive a token from the BotFather.
- **Save the Token**: Store this token securely; you'll need it to access the Telegram API. Do not share this token as it gives full control over your bot.

Note: Save the token as `TELEGRAM_BOT_TOKEN` in your .env file

### Setting up BasedLabs API token:

Follow our docs here (BasedLabs API Docs)[https://basedlabs-docs.vercel.app/]
