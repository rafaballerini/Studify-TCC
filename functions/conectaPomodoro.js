const { joinVoiceChannel, createAudioPlayer, createAudioResource, getVoiceConnection, NoSubscriberBehavior} = require('@discordjs/voice');
const play = require('play-dl');
const path = require('path');
const Personagem = require('../src/models/Personagem.js')
const buscaTempoDescanso = require('./buscaTempoDescanso.js')
const buscaTempoFoco = require('./buscaTempoFoco.js')

let estudoAtual = 0
let ciclos = 0
let vC = ""

module.exports = {
    async conectaPomodoro(tempo, interaction, client){
        if(client){
            vC = await client.channels.cache.get(interaction.member.voice.channelId);
        }
        let personagemProfile = await Personagem.findOne({ personagemId: interaction.user.id})
        let url= "https://youtu.be/SU0lQsE0kU8"
        const filePathDescanso = path.join(__dirname, '../assets/yooDescanso.m4a'); 
        const filePathFoco = path.join(__dirname, '../assets/yooFoco.m4a');   
        let tempoPomodoroDescanso = await buscaTempoDescanso.buscaTempoDescanso(tempo)
        let tempoPomodoroFoco = await buscaTempoFoco.buscaTempoFoco(tempo)

        let connection = joinVoiceChannel(
            {
                channelId: interaction.member.voice.channelId,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator
            });

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Stop,
            },
        });

        const stream = await play.stream(url);
		const resourceYt = createAudioResource(stream.stream, {
            inputType: stream.type
        });
        const resourceYooDescanso = createAudioResource(filePathDescanso);
        const resourceYooFoco = createAudioResource(filePathFoco);

        player.play(resourceYt);
		connection.subscribe(player);

        setTimeout(() => {
            if (vC.members.size > 1){
                player.play(resourceYooDescanso);
                estudoAtual += tempoPomodoroFoco
                ciclos += 1
                personagemProfile.personagemMinutosEstudados += tempoPomodoroFoco
                personagemProfile.save()
                interaction.channel.send(`📚 Boa! ${ciclos}° ciclo concluído, bora continuar!`)
            
                setTimeout(() => {
                    player.play(resourceYooFoco); 
                    setTimeout(() => {
                        this.conectaPomodoro(tempo, interaction)
                    }, 0.04 * 60 * 1000); 
                }, tempoPomodoroDescanso * 60 * 1000);
            } else {
                interaction.channel.send(`💔 Infelizmente você **não concluiu esse ciclo pomodoro**!
Até hoje você já estudou **${personagemProfile.personagemMinutosEstudados} minutos**! Continue com o bom trabalho para subir de cargo e aumentar seu salário`)
                connection.disconnect()
            }
        }, tempoPomodoroFoco * 60 * 1000); 
    }
}