const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('perfil')
		.setDescription('Visualize seu perfil'),
	async execute(interaction) {
		const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');
		const background = await Canvas.loadImage('./assets/canvas.jpg');
		context.drawImage(background, 0, 0, canvas.width, canvas.height);
		const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
		await interaction.reply({ files: [attachment] });
	},
};