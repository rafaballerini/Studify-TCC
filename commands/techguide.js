const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const row = new ActionRowBuilder()
	.addComponents(
		new ButtonBuilder()
			.setCustomId('frontend')
			.setLabel('Front-end')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('1068623892236746893'),
		new ButtonBuilder()
			.setCustomId('backend')
			.setLabel('Back-end')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('1068623892236746893'),
		new ButtonBuilder()
			.setCustomId('mobile')
			.setLabel('Mobile')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('1068623892236746893'),
		new ButtonBuilder()
			.setCustomId('data')
			.setLabel('Dados')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('1068623892236746893'),
		new ButtonBuilder()
			.setCustomId('cybersecurity')
			.setLabel('Cybersegurança')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('1068623892236746893'),
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('techguide')
		.setDescription('Em dúvida do que estudar? Descubra com o Tech Guide!'),

	async execute(interaction) {
		await interaction.reply({ content: 'Com qual dessas áreas você mais se identifica?', components: [row] });
	},
};