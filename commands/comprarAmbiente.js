const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('comprar')
		.setDescription('Compre algo para seu perfil')
		.addSubcommand(subcommand =>
			subcommand
				.setName('ambiente')
				.setDescription('Compre mais opções de ambiente de trabalho para aparecerem no fundo do seu perfil!')),
	async execute(interaction) {
		await interaction.reply({ content: 'Em qual desses lugares você gostaria de trabalhar?', components: [row] });
	},
};

const row = new ActionRowBuilder()
	.addComponents(
		new ButtonBuilder()
			.setCustomId('cafeteria')
			.setLabel('Cafeteria - 100k')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('☕'),
	);