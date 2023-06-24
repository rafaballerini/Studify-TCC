const Personagem = require('../src/models/Personagem.js')

module.exports = {
	async adicionaPlanoFundo(ambienteSelecionado, interaction) {
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        if (personagemProfile.personagemPlanosFundoComprados.includes(ambienteSelecionado)){
            await interaction.reply(`❗️ Você já comprou esse ambiente!
Se deseja alterar o ambiente que está utilizando no momento, use o comando **/alterar ambiente**`);
        } else {
            if (ambienteSelecionado == "cafeteria" && personagemProfile.personagemAcumulado >= 20000) {
                personagemProfile.personagemPlanosFundoComprados.push(`${ambienteSelecionado}`);
                personagemProfile.personagemAcumulado -= 20000
                await personagemProfile.save()
                await interaction.reply(`✅ Parabéns pela compra! Com certeza seu foco aumentará trabalhando nesse ambiente novo
Para alterar o ambiente que está utilizando no momento, para o que acabou de comprar, use o comando **/alterar ambiente**`);
            } else if (ambienteSelecionado == "quarto" && personagemProfile.personagemAcumulado >= 15000) {
                personagemProfile.personagemPlanosFundoComprados.push(`${ambienteSelecionado}`);
                personagemProfile.personagemAcumulado -= 15000
                await personagemProfile.save()
                await interaction.reply(`✅ Parabéns pela compra! Com certeza seu foco aumentará trabalhando nesse ambiente novo
Para alterar o ambiente que está utilizando no momento, para o que acabou de comprar, use o comando **/alterar ambiente**`);
            } else if (ambienteSelecionado == "lago" && personagemProfile.personagemAcumulado >= 10000){
                personagemProfile.personagemPlanosFundoComprados.push(`${ambienteSelecionado}`);
                personagemProfile.personagemAcumulado -= 10000
                await personagemProfile.save()
                await interaction.reply(`✅ Parabéns pela compra! Com certeza seu foco aumentará trabalhando nesse ambiente novo
Para alterar o ambiente que está utilizando no momento, para o que acabou de comprar, use o comando **/alterar ambiente**`);
            } else if (ambienteSelecionado == "biblioteca" && personagemProfile.personagemAcumulado >= 8000) {
                personagemProfile.personagemPlanosFundoComprados.push(`${ambienteSelecionado}`);
                personagemProfile.personagemAcumulado -= 8000
                await personagemProfile.save()
                await interaction.reply(`✅ Parabéns pela compra! Com certeza seu foco aumentará trabalhando nesse ambiente novo
Para alterar o ambiente que está utilizando no momento, para o que acabou de comprar, use o comando **/alterar ambiente**`);
            } else if (ambienteSelecionado == "faculdade" && personagemProfile.personagemAcumulado >= 5000){
                personagemProfile.personagemPlanosFundoComprados.push(`${ambienteSelecionado}`);
                personagemProfile.personagemAcumulado -= 5000
                await personagemProfile.save()
                await interaction.reply(`✅ Parabéns pela compra! Com certeza seu foco aumentará trabalhando nesse ambiente novo
Para alterar o ambiente que está utilizando no momento, para o que acabou de comprar, use o comando **/alterar ambiente**`);
            } else {
                await interaction.reply(`❌ Você não tem ballecoins suficientes para comprar esse ambiente de trabalho!`);
            }
        }
    },
};