const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('perfil')
		.setDescription('Visualize seu perfil'),

	async execute(interaction) {

		// cria a imagem e o fundo
		const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');
		const background = await Canvas.loadImage('./assets/canvas.jpg');
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		// borda branca
		context.strokeStyle = '#ffffff';
		context.strokeRect(0, 0, canvas.width, canvas.height);

		// escrever "perfil de"
		context.font = '28px sans-serif';
		context.fillStyle = '#ffffff';
		context.fillText('Perfil de', canvas.width / 2.5, canvas.height / 3.5);
		context.font = applyText(canvas, `${interaction.member.displayName}!`);
		context.fillStyle = '#ffffff';
		context.fillText(`${interaction.member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

		// escrever nome do usuário
		context.font = applyText(canvas, interaction.member.displayName);
		context.fillStyle = '#ffffff';
		context.fillText(interaction.member.displayName, canvas.width / 2.5, canvas.height / 1.8);

		// desenhar círculo para imagem de perfil
		context.beginPath();
		context.arc(125, 125, 100, 0, Math.PI * 2, true);
		context.closePath();
		context.clip();

		// imagem de perfil
		const { body } = await request(interaction.user.displayAvatarURL({ extension: 'jpg' }));
		const avatar = await Canvas.loadImage(await body.arrayBuffer());
		context.drawImage(avatar, 25, 0, 200, canvas.height);
		context.drawImage(avatar, 25, 25, 200, 200);

		// cria o arquivo de imagem
		const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
		await interaction.reply({ files: [attachment] });
	},
};

// fazer o nome do usuário caber na imagem
const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');
	let fontSize = 70;
	do {
		context.font = `${fontSize -= 10}px sans-serif`;
	} while (context.measureText(text).width > canvas.width - 300);
	return context.font;
};