const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const row = new ActionRowBuilder()
	.addComponents(
		new StringSelectMenuBuilder()
			.setCustomId('docs')
			.setPlaceholder('Nenhuma linguagem selecionada')
			.addOptions({
				label: 'Javascript',
				description: 'Veja a documentação de Javascript',
				value: 'javascript',
			},
			{
				label: 'Python',
				description: 'Veja a documentação de Python',
				value: 'python',
			},
			{
				label: 'C#',
				description: 'Veja a documentação de C#',
				value: 'csharp',
			},
			{
				label: 'Discord.js',
				description: 'Veja a documentação de Discord.js',
				value: 'discordjs',
			},
			{
				label: 'Java',
				description: 'Veja a documentação de Java',
				value: 'java',
			},
			),
	);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('docs')
		.setDescription('Acesse a documentação da tecnologia que quiser'),

	async execute(interaction) {
		await interaction.reply({ content: 'Selecione uma das tecnologias abaixo:', components: [row] });
	},
};

// .set('docs')
// 			.setPlaceholder('Nenhuma linguagem selecionada')
// 			.addOptions({
// 				label: 'Javascript',
// 				description: 'Veja a documentação de Javascript',
// 				value: 'javascript',
// 			},
// 			{
// 				label: 'Python',
// 				description: 'Veja a documentação de Python',
// 				value: 'python',
// 			},
// 			{
// 				label: 'C#',
// 				description: 'Veja a documentação de C#',
// 				value: 'csharp',
// 			},
// 			{
// 				label: 'Discord.js',
// 				description: 'Veja a documentação de Discord.js',
// 				value: 'discordjs',
// 			},
// 			{
// 				label: 'Java',
// 				description: 'Veja a documentação de Java',
// 				value: 'java',
// 			},
// 			),