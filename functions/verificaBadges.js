const Personagem = require('../src/models/Personagem.js')

module.exports = {
    async verificaBadges(interaction){
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        if (personagemProfile.personagemMinutosEstudados >= 10000 ) {
            personagemProfile.personagemBadges.push(2)
        } 
        if (personagemProfile.personagemAcumulado >= 100000) {
            personagemProfile.personagemBadges.push(3)
        }
        if (personagemProfile.personagemDesafioNumero >= 100) {
            personagemProfile.personagemBadges.push(4)
        }
        if (personagemProfile.personagemPlanosFundoComprados.includes("quarto") && personagemProfile.personagemPlanosFundoComprados.includes("biblioteca") && personagemProfile.personagemPlanosFundoComprados.includes("faculdade") && personagemProfile.personagemPlanosFundoComprados.includes("cafeteria") && personagemProfile.personagemPlanosFundoComprados.includes("lago")) {
            personagemProfile.personagemBadges.push(5)
            personagemProfile.personagemBadges.push(6)
        }
        if (personagemProfile.personagemCafeImpecavel >= 50) {
            personagemProfile.personagemBadges.push(7)
        }
        if (personagemProfile.personagemCiclosPomodoro >= 500) {
            personagemProfile.personagemBadges.push(8)
        }
        if (personagemProfile.personagemBadges.includes(1) && personagemProfile.personagemBadges.includes(2) && personagemProfile.personagemBadges.includes(3) && personagemProfile.personagemBadges.includes(4) && personagemProfile.personagemBadges.includes(5) && personagemProfile.personagemBadges.includes(6) && personagemProfile.personagemBadges.includes(7) && personagemProfile.personagemBadges.includes(8)) {
            personagemProfile.personagemBadges.push(9)
        }
        personagemProfile.save()
    }
}