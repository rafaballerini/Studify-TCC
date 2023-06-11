const mongoose = require("mongoose");

const personagemSchema = new mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId},
        personagemId: {type: String, required: true},
        personagemUsername: {type: String, required: true},
        personagemCargo: {type: String, required: true},
        personagemPlanoFundo: {type: String, required: true},
        personagemPlanosFundoComprados: {type: [String], required: true},
        personagemSistemaOperacional: {type: Number, required: true},
        personagemCafeina: {type: Number, required: true},
        personagemPerifericos: {type: [Number], required: true},
        personagemFerramentas: {type: [Number], required: true},
        personagemSalario: {type: Number, required: true},
        personagemAcumulado: {type: Number, required: true},
        personagemMinutosEstudados: {type: Number, required: true},
        personagemDesafioDiario: {type: Boolean, required: true},
        personagemPremioDiario: {type: Boolean, required: true},
        personagemPlaylist: {type: String, required: true}
    }
);

const personagens = mongoose.model("personagens", personagemSchema);

module.exports = personagens;