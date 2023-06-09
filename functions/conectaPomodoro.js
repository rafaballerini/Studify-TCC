const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior} = require('@discordjs/voice');
const play = require('play-dl');
const path = require('path');
const cicloPomodoro = require('./cicloPomodoro');

let studyTime = 0

module.exports = {
    async conectaPomodoro(tempo, interaction){
        let url= "https://youtu.be/SU0lQsE0kU8"
        const filePathDescanso = path.join(__dirname, '../assets/yooDescanso.m4a'); 
        const filePathFoco = path.join(__dirname, '../assets/yooFoco.m4a');   

        let connection = joinVoiceChannel(
            {
                channelId: interaction.member.voice.channelId,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator
            });

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
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
        await interaction.reply('Os estudos começaram!');

        cicloPomodoro.iniciaCiclo(tempo, resourceYooDescanso, resourceYooFoco, player)
    }
}