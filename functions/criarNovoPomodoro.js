const conectaPomodoro = require('../functions/conectaPomodoro.js');

module.exports = {
	async criarNovoPomodoro(tempo, interaction) {
        
        if (!interaction.member.voice.channel) {
            await interaction.reply('❌ Você precisa estar em um canal de voz para iniciar o Pomodoro!');
            return;
        }

        conectaPomodoro.conectaPomodoro(tempo, interaction)
}}