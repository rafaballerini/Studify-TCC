const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior } = require('@discordjs/voice');
const dotenv = require('dotenv');
dotenv.config();
const { GUILD_ID, CHANNEL_ID } = process.env;

module.exports = {
	async criarNovoPomodoro(tempo, interaction) {
        const connection = joinVoiceChannel({
            channelId: CHANNEL_ID,
            guildId: GUILD_ID,
            adapterCreator: interaction.channel.guild.voiceAdapterCreator,
        });
        console.log(tempo)

    const player = createAudioPlayer({
        behaviors: {
            noSubscriber: NoSubscriberBehavior.Pause,
        },
    });
    const subscription = connection.subscribe(player);
    const resource = createAudioResource('https://open.spotify.com/playlist/5TUxgTIxzLbLVh7RUf9V8i?si=4d289b615bf34462');
    player.play(resource);

    // Play "track.mp3" across two voice connections
    connection1.subscribe(player);
    connection2.subscribe(player);

    if (subscription) {
        setTimeout(() => subscription.unsubscribe(), 5_000);
    }
}
};