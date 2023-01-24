const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, PermissionsBitField, ApplicationCommandOptionType, ChannelType } = require("discord.js");

module.exports = {
    name: `nukechannels`,
    options: [
        {
            name: `name`,
            description: `The new channel name`,
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
        if(!me.permissions.has(PermissionsBitField.Flags.ManageChannels)) return console.log(`[ERROR] I'm missing the permission ManageChannels (1 << 4)! [${interaction.guild.name}]`);
        const channels = await interaction.guild.channels.fetch();
        console.log(`[CH] T = Textchannel | V = Voicechannel | C = Category | O = Other`);
        channels.forEach(async channel => {
            if(!channel.permissionsFor(me).has(PermissionsBitField.Flags.ManageChannels)) return console.log(`[CH] Skipped ${channel.name} (${channel.id}): Missing permission ManageChannels (1 << 4)`);
            const oldname = channel.name;
            const type = channel.type == ChannelType.GuildText ? `T` : channel.type == ChannelType.GuildVoice ? `V` : channel.type == ChannelType.GuildCategory ? `C` : `O`;
            await channel.setName(options.getString(`name`) || `sussy impostor`, `get nuked [rappytv's nuker]`).then(() => {
                return console.log(`[CH] Edited [${type}] ${oldname} -> ${channel.name} (${channel.id})`);
            }).catch((err) => {
                return console.log(`[CH] Failed to edit [${type}] ${oldname} (${channel.id}): ${err}`);
            });
            channel.permissionOverwrites.set([]).catch(() => {});
        });
    }
}