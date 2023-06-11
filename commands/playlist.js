const { SlashCommandBuilder } = require('discord.js');
const Personagem = require('../src/models/Personagem.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('playlist')
		.setDescription('Defina a playlist do Youtube para tocar no seus estudos pomodoro!')
		.addStringOption(option =>
			option.setName('url')
				.setDescription('Cole a URL da playlist do Youtube para tocar no seus estudos pomodoro!')
				.setRequired(true)),
	async execute(interaction) {
		let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
		const url = interaction.options.getString("url");
		personagemProfile.personagemPlaylist = url
		personagemProfile.save()
		await interaction.reply(`✅ Pronto! Agora quando você for estudar utilizando **/pomodoro** ouvirá a playlist adicionada
Caso queira alterar a playlist, basta utilizar novamente o comando **/playlist**`);
	},
};