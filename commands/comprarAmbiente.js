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
			.setCustomId('faculdade')
			.setLabel('Faculdade - 5.000 ballecoins')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('📚'),
		new ButtonBuilder()
			.setCustomId('biblioteca')
			.setLabel('Biblioteca - 8.000 ballecoins')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('🏛️'),
		new ButtonBuilder()
			.setCustomId('lago')
			.setLabel('Lago - 10.000 ballecoins')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('🪷'),
		new ButtonBuilder()
			.setCustomId('quarto')
			.setLabel('Quarto - 15.000 ballecoins')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('🖥️'),
		new ButtonBuilder()
			.setCustomId('cafeteria')
			.setLabel('Cafeteria - 20.000 ballecoins')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('☕'),
		
	);