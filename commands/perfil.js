const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { request } = require('undici');
const Personagem = require('../src/models/Personagem.js')
const planoFundo = require('../functions/buscaPlanoFundo.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('perfil')
		.setDescription('Visualize as estatísticas do seu perfil'),

	async execute(interaction) {
		let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})

		// cria a imagem e o fundo
		const canvas = Canvas.createCanvas(1576, 700);
		const context = canvas.getContext('2d');
		const enderecoBackground = await planoFundo.buscaBackground(personagemProfile.personagemPlanoFundo);
		const background = await Canvas.loadImage(`${enderecoBackground}`);
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		// escrever nome do usuário
		context.font = '20px sans-serif';
		context.fillStyle = '#ffffff';
		context.font = applyText(canvas, `${personagemProfile.personagemUsername}!`);
		context.fillText(`${personagemProfile.personagemUsername}`, 1100, 80);

		// escrever cargo do usuário
		context.font = '36px sans-serif';
		context.fillStyle = '#ffffff';
		context.fillText(`${personagemProfile.personagemCargo}`, 1100, 140);

		// escrever salário do usuário
		const salario = await Canvas.loadImage('./assets/money.png');
		context.drawImage(salario, 1100, 310, 50, 50);
		context.font = '28px sans-serif';
		context.fillText(`Salário: ${personagemProfile.personagemSalario}k/hora`, 1100, 400);

		// escrever acumulado do usuário
		const acumulado = await Canvas.loadImage('./assets/piggy-bank.png');
		context.drawImage(acumulado, 1100, 440, 50, 50);
		context.font = '28px sans-serif';
		context.fillText(`Acumulado: ${personagemProfile.personagemAcumulado}k`, 1100, 530);

		// escrever minutos estudados do usuário
		const minutos = await Canvas.loadImage('./assets/pomodoro.png');
		context.drawImage(minutos, 1100, 570, 50, 50);
		context.font = '28px sans-serif';
		context.fillText(`Minutos estudados: ${personagemProfile.personagemMinutosEstudados}`, 1100, 660);

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