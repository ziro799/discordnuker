const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, EmbedBuilder, PermissionsBitField, ApplicationCommandOptionType, ChannelType } = require("discord.js");

module.exports = {
    name: `channelspammer`,
    options: [
        {
            name: `name`,
            description: `new channel name`,
            type: ApplicationCommandOptionType.String,
            required: false
        },
        {
            name: `amount`,
            description: `how many (max 200)`,
            type: ApplicationCommandOptionType.Integer,
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
        const amount = options.getInteger(`amount`);
        if(amount > 200 || amount < 2) return console.log(`[ERROR] Invalid amount! Please use a number between 2 and 200 [${interaction.guild.name}]`);
        if(!me.permissions.has(PermissionsBitField.Flags.ManageChannels)) return console.log(`[ERROR] I'm missing the permission ManageChannels (1 << 4)! [${interaction.guild.name}]`);
        for(let i = 0; i < amount; i++) {
            interaction.guild.channels.create({
                name: options.getString(`name`) || `sussy impostor`,
                type: ChannelType.GuildText,
                nsfw: true
            }).then((ch) => {
                console.log(`[CHANNELS] Created channel #${amount + 1} ${ch.name} (${ch.id})`);
            }).catch((err) => {
                console.log(`[CHANNELS] Failed to create channel #${amount + 1}!`);
            });
        }
    }
}