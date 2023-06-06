const { SlashCommandBuilder } = require('discord.js');
const Guild = require('../src/models/Guild.js')
const mongoose = require('mongoose');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servidor')
		.setDescription('Retorna informações desse servidor'),
	async execute(interaction) {
		let guildProfile = await Guild.findOne({ guildId: interaction.guild.id});
        if (!guildProfile) {
            guildProfile = await new Guild ({
                _id: new mongoose.Types.ObjectId(),
                guildId: interaction.guild.id,
                guildName: interaction.guild.name,
                guildIcon: interaction.guild.iconURL() ? interaction.guild.iconURL() : "None."
            })

            try {
                await guildProfile.save()
                await interaction.reply({
                    content: `**Nome do servidor:** ${guildProfile.guildName}
**ID do servidor:** ${guildProfile.guildId}
*Servidor registrado na base de dados*`
                })
            } catch (err) {
                console.error(err);
            }
        } else {
            await interaction.reply({
                content: `**Nome do servidor:** ${guildProfile.guildName}
**ID do servidor:** ${guildProfile.guildId}
*Servidor já presente na base de dados*`
            })
        }
	},
};