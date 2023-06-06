const Personagem = require('../../src/models/Personagem.js')

module.exports = {
	async aumentarValor(quantidade, interaction) {
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        personagemProfile.personagemAcumulado += quantidade
        await personagemProfile.save()
    },
};