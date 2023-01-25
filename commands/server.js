const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Informações sobre o servidor'),
	async execute(interaction) {
		await interaction.reply(`Esse é o servidor ${interaction.guild.name} e tem ${interaction.guild.memberCount} membros`);
	},
};