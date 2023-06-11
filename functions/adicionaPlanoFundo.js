const Personagem = require('../src/models/Personagem.js')

module.exports = {
	async adicionaPlanoFundo(ambienteSelecionado, interaction) {
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        if (personagemProfile.personagemPlanosFundoComprados.includes(ambienteSelecionado)){
            await interaction.reply(`❗️ Você já comprou esse ambiente!
Se deseja alterar o ambiente que está utilizando no momento, use o comando **/alterar ambiente**`);
        } else {
            personagemProfile.personagemPlanosFundoComprados.push(`${ambienteSelecionado}`);
            await personagemProfile.save()
            await interaction.reply(`✅ Parabéns pela compra! Com certeza seu foco aumentará trabalhando nesse ambiente novo
Para alterar o ambiente que está utilizando no momento, para o que acabou de comprar, use o comando **/alterar ambiente**`);
        }
    },
};