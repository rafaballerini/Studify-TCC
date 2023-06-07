const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder} = require('discord.js');

const rowFoco = new ActionRowBuilder()
	.addComponents(
		new StringSelectMenuBuilder()
			.setCustomId('pomodoroFoco')
			.setPlaceholder('Selecione uma das opções')
			.addOptions({
				label: '25/5',
				description: '25min de foco e 5min de descanso (clássico)',
				value: 'vinteCincoCinco',
			},
			{
				label: '30/10',
				description: '30min de foco e 10min de descanso',
				value: 'trintaDez',
			},
			{
				label: '45/20',
				description: '45min de foco e 15min de descanso',
				value: 'quarentaCincoVinte',
			},
			{
				label: '50/30',
				description: '50min de foco e 30min de descanso',
				value: 'cinquentaTrinta',
			},),
	)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pomodoro')
		.setDescription('Utilize a técnica Pomodoro para estudar!'),

	async execute(interaction) {
		await interaction.reply({ 
			content: '🍅 Você deseja utilizar quantos minutos de **foco/descanso**?', 
			components: [rowFoco] });
	},
};