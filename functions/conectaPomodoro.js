const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior} = require('@discordjs/voice');
const { createReadStream } = require('fs');
const play = require('play-dl');
const path = require('path');

let studyTime = 0

module.exports = {
    async conectaPomodoro(tempoPomodoro, interaction){
        let url= "https://www.youtube.com/watch?v=180ysvIh6kU"
        const audioFilePath = path.join(__dirname, '../assets/yooPausa.mp3');  
        console.log(audioFilePath)
        tempoPomodoro = 1

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

		const resource = createAudioResource(stream.stream, {
            inputType: stream.type
        });

        // const resource = createAudioResource(createReadStream(audioFilePath));
        player.play(resource);
		connection.subscribe(player);

        // setTimeout(() => {
        //     player.play(resource);
        //     connection.subscribe(player);
        //     console.log("deu timeout")
        //     studyTime += tempoPomodoro;
        // }, tempoPomodoro * 60000);
        
        console.log(studyTime)
        await interaction.reply('Os estudos começaram!');
    }
}