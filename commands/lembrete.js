const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

const modal = new ModalBuilder()
    .setCustomId('myModal')
    .setTitle('My Modal');

const tituloLembrete = new TextInputBuilder()
    .setCustomId('tituloLembrete')
    .setLabel("Qual título deseja dar pra esse lembrete?")
    .setStyle(TextInputStyle.Short);

const conteudoLembrete = new TextInputBuilder()
    .setCustomId('conteudoLembrete')
    .setLabel("Do que deseja ser lembrado?")
    .setStyle(TextInputStyle.Paragraph);

const firstActionRow = new ActionRowBuilder().addComponents(tituloLembrete);
const secondActionRow = new ActionRowBuilder().addComponents(conteudoLembrete);

modal.addComponents(firstActionRow, secondActionRow);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lembrete')
		.setDescription('Crie um lembrete e seja notificado dele na data que selecionar'),
	async execute(interaction) {
		await interaction.showModal(modal);
	},
};