const Personagem = require('../../src/models/Personagem.js')

module.exports = {
    async atualizaSalario(interaction){
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        dataFinal = Date.now() 
        
        const diff = Math.abs(dataFinal - personagemProfile.personagemSalarioData); 
        const horasCompletas = Math.floor(diff / 3600000);
        if (horasCompletas > 0) {
            personagemProfile.personagemAcumulado += horasCompletas * personagemProfile.personagemSalario
            personagemProfile.personagemSalarioData = Date.now()
            personagemProfile.save()
        }
    }
}