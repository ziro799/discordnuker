const { Interaction, EmbedBuilder } = require("discord.js");

/**
 * 
 * @param {Interaction} interaction 
 */

module.exports = async (interaction) => {
    if(interaction.isCommand()) {
        const { user, member, options, commandName, guild, channel } = interaction;
        if(bot.cfg.executor.trim() != `` && bot.cfg.executor != user.id) {
            console.log(`[WARN] ${user.tag} tried to use /${commandName}`);
            return interaction.reply({ embeds: [new EmbedBuilder().setColor(bot.colors.error).setDescription(`i said fuck off`)], ephemeral: true }).catch(() => {});
        }

        const cmd = bot.commands.get(commandName);
        if(!cmd) return interaction.reply({ embeds: [new EmbedBuilder().setColor(bot.colors.error).setTitle(`❌ An error ocurred!`).setDescription(`Try again in a few seconds!`)], ephemeral: true }).catch(() => {});

        try {
            await interaction.reply({ embeds: [new EmbedBuilder().setColor(bot.colors.standart).setDescription(`Executing command \`/${commandName}\`...\nCheck the console for output!`)], ephemeral: true });
            cmd.execute(interaction, options, member, user);
        } catch(err) {
            console.error(new Error(err));
            interaction.reply({ embeds: [new EmbedBuilder().setColor(bot.colors.error).setTitle(`❌ An error ocurred!`).setDescription(`${err}`)], ephemeral: true });
        }
    }
}