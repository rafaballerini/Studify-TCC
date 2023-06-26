const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('@napi-rs/canvas');
const { request } = require('undici');
const Personagem = require('../src/models/Personagem.js')
const planoFundo = require('../functions/buscaPlanoFundo.js');
const atualizaSalario = require('../functions/salario/atualizaSalario.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('perfil')
		.setDescription('Visualize as estatísticas do seu perfil'),

	async execute(interaction) {
		atualizaSalario.atualizaSalario(interaction);
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
		context.fillText(`Salário: ${personagemProfile.personagemSalario} ballecoins/hora`, 1100, 400);

		// escrever acumulado do usuário
		const acumulado = await Canvas.loadImage('./assets/piggy-bank.png');
		context.drawImage(acumulado, 1100, 440, 50, 50);
		context.font = '28px sans-serif';
		context.fillText(`Acumulado: ${personagemProfile.personagemAcumulado} ballecoins`, 1100, 530);

		// escrever minutos estudados do usuário
		const minutos = await Canvas.loadImage('./assets/pomodoro.png');
		context.drawImage(minutos, 1100, 570, 50, 50);
		context.font = '28px sans-serif';
		context.fillText(`Minutos estudados: ${personagemProfile.personagemMinutosEstudados}`, 1100, 660);

		//Badges
		context.font = '40px sans-serif';
		if (personagemProfile.personagemBadges.includes(1)){
			context.fillText(`💼`, 1100, 210);
		}
		if (personagemProfile.personagemBadges.includes(2)){
			context.fillText(`👩🏻‍🏫`, 1200, 210);
		}
		if (personagemProfile.personagemBadges.includes(3)){
			context.fillText(`💰`, 1300, 210);
		}
		if (personagemProfile.personagemBadges.includes(4)){
			context.fillText(`🗡️`, 1400, 210);
		}
		if (personagemProfile.personagemBadges.includes(5)){
			context.fillText(`💸`, 1500, 210);
		}
		if (personagemProfile.personagemBadges.includes(6)){
			context.fillText(`🗺️`, 1150, 290);
		}
		if (personagemProfile.personagemBadges.includes(7)){
			context.fillText(`☕️`, 1250, 290);
		}
		if (personagemProfile.personagemBadges.includes(8)){
			context.fillText(`🍅`, 1350, 290);
		}
		if (personagemProfile.personagemBadges.includes(9)){
			context.fillText(`🏆`, 1450, 290);
		}

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