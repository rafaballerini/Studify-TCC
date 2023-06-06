const { SlashCommandBuilder } = require('discord.js');
const Personagem = require('../src/models/Personagem.js')
const mongoose = require('mongoose');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('codar')
		.setDescription('Inicie no seu primeiro emprego!'),
	async execute(interaction) {
		let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id});
        if (!personagemProfile) {
            personagemProfile = await new Personagem ({
                _id: new mongoose.Types.ObjectId(),
                personagemId: interaction.user.id,
                personagemUsername: interaction.user.username,
                personagemCargo: "Estagiário(a)",
				personagemPlanoFundo: "basico",
				personagemPlanosFundoComprados: ["basico"],
				personagemSistemaOperacional: 0,
				personagemCafeina: 0,
				personagemPerifericos: [],
				personagemFerramentas: [],
				personagemSalario: 100,
				personagemAcumulado: 0,
				personagemMinutosEstudados: 0,
				personagemDesafioDiario: false,
				personagemPremioDiario: false,
            })

            try {
                await personagemProfile.save()
                await interaction.reply({
                    content: `✅ Olá ${personagemProfile.personagemUsername}, **seu primeiro emprego foi iniciado!**
					
Aprenda já a fazer café, pois você entrou como **${personagemProfile.personagemCargo}**
Utilize o comando **/comandos** para descobrir tudo o que pode fazer a partir de agora para aumentar o seu **cargo** e **salário**`
                })
            } catch (err) {
                console.error(err);
            }
        } else {
            await interaction.reply({
                content: `❗️ **${personagemProfile.personagemUsername}, você já iniciou seu primeiro emprego e hoje está trabalhando como ${personagemProfile.personagemCargo}!**

Utilize o comando **/comandos** para descobrir tudo o que pode fazer para aumentar o seu **cargo** e **salário**`
            })
        }
	},
};