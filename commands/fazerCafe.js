const { SlashCommandBuilder } = require('discord.js');
const fazerCafeAumentar = require('../functions/acumulado/aumentarValor')
const fazerCafeDiminuir = require('../functions/acumulado/diminuirValor')
const Personagem = require('../src/models/Personagem.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fazer')
		.setDescription('Faça algo para ganhar moedas')
        .addSubcommand(subcommand =>
			subcommand
				.setName('cafe')
				.setDescription('Faça café para seus colegas de equipe e ganhe até 10k!')),
        
	async execute(interaction) {
        try {
            let novaData = new Date();
            novoMinuto = novaData.getTime()
            let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
            let personagemMinuto = personagemProfile.personagemCafeData.getTime()
            let diferenca = Math.abs(personagemMinuto - novoMinuto) / (60000);
            if (diferenca >= 5 || !personagemProfile.personagemCafeData){
                let numeroSorteado = Math.floor(Math.random() * 11)
                if (numeroSorteado == 0){
                    fazerCafeDiminuir.diminuirValor(2, interaction);
                    await interaction.reply({
                        content: `☕️ Seu café ficou **INTOMÁVEL**! Seus colegas pediram reembolso de **2k**`
                    })
                } else if (numeroSorteado >= 1 && numeroSorteado < 4){
                    fazerCafeAumentar.aumentarValor(numeroSorteado, interaction);
                    await interaction.reply({
                        content: `☕️ Seu café ficou **ruim**! Seus colegas acreditam que como barista você é um(a) ótimo dev, mas doaram **${numeroSorteado}k** porque ficaram com pena`
                    })
                } else if (numeroSorteado >= 4 && numeroSorteado < 7){
                    fazerCafeAumentar.aumentarValor(numeroSorteado, interaction);
                    await interaction.reply({
                        content: `☕️ Seu café ficou **satisfatório**! Seus colegas acreditam no seu potencial e decidiram se juntar e te dar **${numeroSorteado}k** para você aprender a fazer um café melhor na próxima!`
                    })
                } else if (numeroSorteado >= 7 && numeroSorteado < 10) {
                    fazerCafeAumentar.aumentarValor(numeroSorteado, interaction);
                    await interaction.reply({
                        content: `☕️ Seu café ficou **bom**! Seus colegas o acharam bem gostoso e decidiram se juntar e te dar **${numeroSorteado}k** como agradecimento!`
                    })
                } else if (numeroSorteado == 10) {
                    fazerCafeAumentar.aumentarValor(numeroSorteado, interaction);
                    personagemProfile.personagemCafeImpecavel += 1
                    await interaction.reply({
                        content: `☕️ Que café **IMPECÁVEL**! Seus colegas o acharam uma obra de arte e investiram em você **${numeroSorteado}k** para caso decida abrir uma cafeteria!`
                    })
                }
                personagemProfile.personagemCafeData = Date.now()
                personagemProfile.save()
            } else {
                await interaction.reply({
                    content: `❌ Você precisa esperar ao menos **5 minutos** para fazer outro café!`
                })
            }
        } catch (err) {
            console.error(err);
        }
	},
};