const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const row = new ActionRowBuilder()
	.addComponents(
		new ButtonBuilder()
			.setCustomId('vinteCinco')
			.setLabel('25min')
			.setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
			.setCustomId('trinta')
			.setLabel('30min')
			.setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
			.setCustomId('quarenta')
			.setLabel('40min')
			.setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
			.setCustomId('cinquenta')
			.setLabel('50min')
			.setStyle(ButtonStyle.Primary),
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pomodoro')
		.setDescription('Configure o tempo do seu Pomodoro para estudar!'),

	async execute(interaction) {
		await interaction.reply({ content: 'Você deseja configurar quantos minutos de foco?', components: [row] });
	},
};