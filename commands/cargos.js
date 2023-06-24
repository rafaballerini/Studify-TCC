const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const embedCargos = new EmbedBuilder()
	.setColor('Orange')
	.setTitle('Cargos disponíveis')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Estagiário(a): 10 ballecoins/hora', value: 'Primeiro emprego ao iniciar o jogo', inline: true },
		{ name: 'Dev Júnior: 20 ballecoins/hora', value: 'Estude por 1.000 minutos', inline: true },
		{ name: 'Dev Pleno: 40 ballecoins/hora', value: 'Estude por 10.000 minutos', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Dev Sênior: 60 ballecoins/hora', value: 'Estude por 20.000 minutos', inline: true },
		{ name: 'Diretor(a): 100 ballecoins/hora', value: 'Estude por 50.000 minutos', inline: true },
		{ name: 'CEO: 200 ballecoins/hora', value: 'Estude por 100.000 minutos', inline: true },
);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cargos')
		.setDescription('Visualize todos cargos disponíveis'),

	async execute(interaction) {
		await interaction.reply({ embeds: [embedCargos] });
	},
};