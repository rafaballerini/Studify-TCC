const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor('Orange')
	.setTitle('Badges disponíveis')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '💼 Primeiro emprego', value: 'Inicie um novo emprego!', inline: true },
		{ name: '👩🏻‍🏫 Estudante dedicado(a)', value: 'Estude por 10.000 minutos', inline: true },
		{ name: '💰 Poupador(a)', value: 'Acumule 100.000 ballecoins', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '⚔️ Desbravador(a)', value: 'Faça 100 desafios diários', inline: true },
		{ name: '💸 Esbanjador(a)', value: 'Gaste 58.000 ballecoins', inline: true },
		{ name: '✈️ Viajante', value: 'Compre todos os ambientes de trabalho', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '☕️ Barista', value: 'Faça 50 cafés impecáveis', inline: true },
		{ name: '🍅 Mestre Yoo', value: 'Finalize 500 ciclos de foco Pomodoro', inline: true },
		{ name: '🏆 MVP', value: 'Conquiste todas as outras badges disponíveis', inline: true },
);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('badges')
		.setDescription('Visualize todas as badges disponíveis'),

	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};