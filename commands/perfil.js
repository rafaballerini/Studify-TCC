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

		// escrever salário do usuário
		const salario = await Canvas.loadImage('./assets/money.png');
		context.drawImage(salario, 1300, 310, 50, 50);
		context.font = '28px sans-serif';
		context.fillText(`Salário: 100k/hora`, 1200, 400);

		// escrever acumulado do usuário
		const acumulado = await Canvas.loadImage('./assets/piggy-bank.png');
		context.drawImage(acumulado, 1300, 440, 50, 50);
		context.font = '28px sans-serif';
		context.fillText(`Acumulado: 100k`, 1210, 530);

		// escrever minutos estudados do usuário
		const minutos = await Canvas.loadImage('./assets/pomodoro.png');
		context.drawImage(minutos, 1300, 570, 50, 50);
		context.font = '28px sans-serif';
		context.fillText(`Minutos estudados: 500`, 1180, 660);

		//Badges
		const { body } = await request(interaction.user.displayAvatarURL({ extension: 'jpg' }));
		const avatar = await Canvas.loadImage(await body.arrayBuffer());
		context.drawImage(avatar, 1080, 200, 80, 80);
		context.drawImage(avatar, 1180, 200, 80, 80);
		context.drawImage(avatar, 1280, 200, 80, 80);
		context.drawImage(avatar, 1380, 200, 80, 80);
		context.drawImage(avatar, 1480, 200, 80, 80);

		// cria o arquivo da imagem final
		const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'perfil.png' });
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