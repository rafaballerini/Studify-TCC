const Personagem = require('../../src/models/Personagem.js')

module.exports = {
    async verificaCargo(interaction){
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        if (personagemProfile.personagemMinutosEstudados >= 1000 && personagemProfile.personagemMinutosEstudados < 10000) {
            personagemProfile.personagemCargo = "Dev Júnior"
            personagemProfile.personagemSalario = 20
            personagemProfile.save()
        } else if (personagemProfile.personagemMinutosEstudados >= 10000 && personagemProfile.personagemMinutosEstudados < 20000){
            personagemProfile.personagemCargo = "Dev Pleno"
            personagemProfile.personagemSalario = 40
            personagemProfile.save()
        } else if (personagemProfile.personagemMinutosEstudados >= 20000 && personagemProfile.personagemMinutosEstudados < 50000){
            personagemProfile.personagemCargo = "Dev Sênior"
            personagemProfile.personagemSalario = 60
            personagemProfile.save()
        } else if (personagemProfile.personagemMinutosEstudados >= 50000 && personagemProfile.personagemMinutosEstudados < 100000){
            personagemProfile.personagemCargo = "Diretor(a)"
            personagemProfile.personagemSalario = 100
            personagemProfile.save()
        } else if (personagemProfile.personagemMinutosEstudados >= 100000){
            personagemProfile.personagemCargo = "CEO"
            personagemProfile.personagemSalario = 200
            personagemProfile.save()
        }
    }
}