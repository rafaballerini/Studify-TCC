const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor('Orange')
	.setTitle('Comandos do Studify')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '🎨 /perfil', value: 'Visualize seu perfil com todas as informações do seu personagem', inline: true },
		{ name: '⚔️ /desafio', value: 'Receba seu desafio de lógica do dia', inline: true },
		{ name: '🍅 /pomodoro', value: 'Estude utilizando a técnica Pomodoro', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '🎧 /playlist', value: 'Altere a playlist do Youtube para o Pomodoro', inline: true },
		{ name: '☕️ /fazer cafe', value: 'Faça café para seus colegas e receba (ou não) ballecoins', inline: true },
		{ name: '🛤️ /techguide', value: 'Não sabe o que estudar? Acesse o guia de estudos de programação!', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '💼 /cargos', value: 'Visualize todos os cargos disponíveis para conquista', inline: true },
		{ name: '🏅 /badges', value: 'Visualize todas as badges disponíveis para conquista', inline: true },
		{ name: '💵 /comprar ambiente', value: 'Compre um novo ambiente de trabalho para mostrar no perfil', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '🏢 /alterar ambiente', value: 'Altere o ambiente de trabalho do seu perfil', inline: true },
		{ name: '💻 /upgrade [objeto]', value: 'Aumente sua produtividade com novas ferramentas **(ainda em desenvolvimento)**', inline: true },
		{ name: '📔 /docs', value: 'Visualize a documentação de tecnologias', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '🐙 /git', value: 'Relembre os principais comandos do Git', inline: true },
		{ name: '❗️ /ping', value: 'Verifique se o Studify está online', inline: true },
		{ name: '👾 /servidor', value: 'Informações sobre o servidor', inline: true },
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('comandos')
		.setDescription('Veja todos os comandos do Studify!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] });
	},
};