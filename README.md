Discord Bot using localized LLM from [GPT4ALL](https://gpt4all.io/index.html). Be sure to create your discord bot beforehand using the [Discord Developer Portal](https://discord.com/developers/applications). 
# Prerequisites
Install required packages:
```
npm i discord.js gpt4all dotenv
```
## Initializing the Model
Install the required programs under the _Requirements_ header of the [GPT4ALL NodeJs](https://docs.gpt4all.io/gpt4all_typescript.html#embedding-alpha) documentation.
Run _gpt.js_ using: 
``
node gpt.js
``
This will install the LLM model and may take a few minutes.

## Bot Environment
In your _.env_ file assign your bot's generated token to a **token** variable and specify the **channel** it will communicate in. 

# Running Program
``
node index.js
``
