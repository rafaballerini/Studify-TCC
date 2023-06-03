const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('perfil')
		.setDescription('Visualize as estatísticas do seu perfil'),

	async execute(interaction) {

		// cria a imagem e o fundo
		const canvas = Canvas.createCanvas(1576, 700);
		const context = canvas.getContext('2d');
		const background = await Canvas.loadImage('./assets/coffeehouse.png');
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		// escrever nome do usuário
		context.font = '20px sans-serif';
		context.fillStyle = '#ffffff';
		context.font = applyText(canvas, `${interaction.member.displayName}!`);
		context.fillText(`${interaction.member.displayName}`, 1250, 80);

		// escrever cargo do usuário
		context.font = '36px sans-serif';
		context.fillStyle = '#ffffff';
		context.fillText(`Desenvolvedora front-end`, 1110, 140);

		//desenhar círculo para imagem 1
		context.beginPath();
		context.arc(1130, 220, 50, 0, Math.PI * 2, true);
		context.closePath();
		context.clip();
		//imagem 1
		const { body } = await request(interaction.user.displayAvatarURL({ extension: 'jpg' }));
		const avatar = await Canvas.loadImage(await body.arrayBuffer());
		context.drawImage(avatar, 25, 0, canvas.height, canvas.height);
		context.drawImage(avatar, 25, 25, 1200, 270);

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