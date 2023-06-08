const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior} = require('@discordjs/voice');
const { createReadStream } = require('fs');
const path = require('path');

module.exports = {
    async conectaPomodoro(tempoPomodoro, interaction){
        const audioFilePath = path.join(__dirname, '../assets/yooPausa.mp3');  

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

        const resource = createAudioResource(createReadStream(audioFilePath));
        player.play(resource);
		connection.subscribe(player);

        await interaction.reply('Os estudos começaram!');
    }
}