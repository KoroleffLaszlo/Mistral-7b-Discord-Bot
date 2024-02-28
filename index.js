require('dotenv/config');
const { Client } = require('discord.js');
const Chat = require('./gpt.js');

class Bot{
    constructor(token, channel){
        this.token = token;
        this.channel = channel;
        this.bot = new Client({
            intents: [
                'GuildMembers', 'Guilds', 'GuildMessages'
            ]
        });
    }
    async run(){
        this.bot.on("ready", () => {
            console.log('kenBot is online');
        })

        this.bot.on('messageCreate', async (message) => {
            try{
                if(message.author.bot) { return; }
                else if(!(message.channelId.includes(this.channel))) { return; }

                message.channel.sendTyping();
                
                let response = await Chat(message.content);
                console.log(`\n\nTHE USER HAS SAID: \n ${message.content}\n\n ---------`);
                message.reply(response);

            }catch(err){
                console.log(`ERROR:\n ${err}`);
                return;
            }
        });

        this.bot.login(this.token);
    }
}

let kenBot = new Bot(process.env.token, process.env.channel);
kenBot.run();