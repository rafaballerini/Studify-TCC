const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('codar')
		.setDescription('Inicie no seu primeiro emprego'),
	async execute(interaction) {
		await interaction.reply('Primeiro emprego iniciado');
	},
};