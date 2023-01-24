const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, EmbedBuilder, PermissionsBitField, ApplicationCommandOptionType, TextBasedChannel, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType } = require("discord.js");

let continueSpam = true;

module.exports = {
    name: `spam`,
    options: [
        {
            name: `text`,
            description: `what to spam`,
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
        if(!me.permissions.has(PermissionsBitField.Flags.ViewChannel) || !me.permissions.has(PermissionsBitField.Flags.SendMessages)) return console.log(`[ERROR] I'm missing the permission ViewChannel (1 << 10) or SendMessages (1 << 11)! [${interaction.guild.name}]`);
        const channels = await interaction.guild.channels.fetch();
        const msg = await interaction.followUp({ embeds: [new EmbedBuilder().setColor(bot.colors.standart).setDescription(`Click the button to stop the spam.`)], components: [new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId(`stop`).setLabel(`Stop`).setStyle(ButtonStyle.Danger))], ephemeral: true });
        msg.awaitMessageComponent().then((int) => {
            continueSpam = false;
            int.deferUpdate().catch(() => {});
            console.log(`[SPAM] Stopped spamming! It may take a few minutes to stop.`);
        });
        channels.filter((ch) => ch.type == ChannelType.GuildText || ch.type == ChannelType.GuildVoice || ch.type == ChannelType.GuildAnnouncement).forEach(channel => {
            if(!channel.permissionsFor(me).has(PermissionsBitField.Flags.ManageChannels) || !channel.permissionsFor(me).has(PermissionsBitField.Flags.SendMessages)) return console.log(`[SPAM] Skipped ${channel.name} (${channel.id}): Missing permission ViewChannel (1 << 10) or SendMessages (1 << 11)`);
            console.log(`[SPAM] Spamming channel ${channel.name} (${channel.id})...`);

            return spam(channel, options.getString(`text`) || `@everyone get spammed`);
        });
    }
}

/**
 * 
 * @param {TextBasedChannel} channel 
 * @param {string} text 
 */

function spam(channel, text) {
    setInterval(() => {
        if(continueSpam) channel.send(text);
    }, 500);
}