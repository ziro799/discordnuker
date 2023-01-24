const { REST, Routes } = require("discord.js");

bot.rest = new REST({ version: '10' }).setToken(bot.cfg.token);
const commands = [];

module.exports = async () => {
    console.log(`[BOT] Logged in as ${bot.client.user.tag}`);
    bot.client.user.setStatus("invisible");

    bot.commands.forEach(cmd => {
        commands.push({
            name: cmd.name,
            description: `fuck off`,
            options: cmd.options,
            dm_permission: false
        });
    });

    try {
        await bot.rest.put(Routes.applicationCommands(bot.client.user.id), { body: commands }).catch(console.error);
        console.log(`[BOT] All commands registered!`);
    } catch (error) {
        console.error(error);
    }
}