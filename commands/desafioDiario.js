const { SlashCommandBuilder } = require('discord.js');
const desafioDiario = require('../functions/buscaDesafio.js')
const Personagem = require('../src/models/Personagem.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('desafio')
		.setDescription('Realize um desafio por dia para ganhar moedas!'),
	async execute(interaction) {
        let novaData = new Date();
        novaData = novaData.toLocaleDateString()
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        console.log(novaData)
        console.log(personagemProfile.personagemDesafioData)
        console.log(personagemProfile.personagemDesafioNumero)
        if (personagemProfile.personagemDesafioData != novaData){
            let desafio = await desafioDiario.buscaDesafio(personagemProfile.personagemDesafioNumero)

            const embed = {
                title: '⚔️ Seu desafio do dia',
                description: `${desafio}`,
            };

            await interaction.reply({ embeds: [embed] })
            personagemProfile.personagemDesafioNumero += 1
            let data = new Date()
            personagemProfile.personagemDesafioData = data.toLocaleDateString();
            console.log(personagemProfile.personagemDesafioData)
            personagemProfile.save()
        } else {
            await interaction.reply(`❌ Você já obteve seu desafio do dia!
Volte novamente amanhã para receber um novo **/desafio**`)
        }
  }

};
    
    
