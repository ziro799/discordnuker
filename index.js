const { Client, Partials, Collection, IntentsBitField } = require("discord.js");
const { readdirSync } = require(`fs`);

// Global variable
global.bot = {};
// Config
bot.cfg = require(`./config.json`);
// Client
bot.client = new Client({
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    intents: 107
});

// Colors
bot.colors = {};
bot.colors.success = 0x00ee00;
bot.colors.standart = 0x2f3136;
bot.colors.error = 0xff0000;

// Handlers

bot.commands = new Collection();

(async() => {
    const commandDir = readdirSync(`./src/commands/`).filter(file => file.endsWith(`.js`));
    const eventDir = readdirSync(`./src/events/`).filter(file => file.endsWith(`.js`));

    for(const file of commandDir) {
        const cmd = require(`./src/commands/${file}`);

        bot.commands.set(cmd.name, cmd);
    }
    for(let file of eventDir) {
        file = file.slice(0, -3);
        const e = require(`./src/events/${file}`);

        if(e.once) {
            bot.client.once(file, e);
        } else {
            bot.client.on(file, e);
        }
    }
})();

bot.client.login(bot.cfg.token);