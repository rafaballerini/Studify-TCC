const Personagem = require('../src/models/Personagem.js')

module.exports = {
	async alteraPlanoFundo(ambienteSelecionado, interaction) {
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        if (personagemProfile.personagemPlanoFundo == ambienteSelecionado){
            await interaction.reply(`❗️ Você já está utilizando esse ambiente de trabalho!
Utilize o comando **/perfil** para visualizar ou **/comprarambiente** para comprar um novo!`);
        } else {
            personagemProfile.personagemPlanoFundo = ambienteSelecionado;
            await personagemProfile.save()
            await interaction.reply(`✅ Ambiente alterado! Com certeza seu foco aumentará trabalhando nesse ambiente novo
Para visualizar o ambiente que está utilizando no momento use o comando **/perfil**`);
        }
    },
};