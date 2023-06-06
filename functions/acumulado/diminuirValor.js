const Personagem = require('../../src/models/Personagem.js')

module.exports = {
	async diminuirValor(quantidade, interaction) {
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        if (personagemProfile.personagemAcumulado - quantidade > 0){
            personagemProfile.personagemAcumulado -= quantidade
            await personagemProfile.save()
        } else {
            personagemProfile.personagemAcumulado = 0
            await personagemProfile.save()
            await interaction.reply({
                content: `💸 **Infelizmente você gastou tudo o que tinha, e agora possui ${personagemProfile.personagemAcumulado}k acumulado**
Mas não desista, use o comando **/comandos** para descobrir outras formas de aumentar seu **salário**`
            })
        }
    },
};