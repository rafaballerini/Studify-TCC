const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Personagem = require('../src/models/Personagem.js')

const row = new ActionRowBuilder()

module.exports = {
	data: new SlashCommandBuilder()
		.setName('alterar')
		.setDescription('Altere algo no seu perfil')
		.addSubcommand(subcommand =>
			subcommand
				.setName('ambiente')
				.setDescription('Altere seu ambiente de trabalho para aparecer no fundo do seu perfil!')),
	async execute(interaction) {
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
		if (row.components.length !== 0){
			row.components = []
		}
        personagemProfile.personagemPlanosFundoComprados.forEach(adicionarBotao)
		await interaction.reply({ content: 'Em qual desses lugares você gostaria de trabalhar?', components: [row] });
	},
};

function adicionarBotao(ambiente) {
	if (ambiente !== 'basico'){
		row.addComponents(
			new ButtonBuilder()
				.setCustomId(ambiente)
				.setLabel(ambiente)
				.setStyle(ButtonStyle.Primary)
		);
	}
}