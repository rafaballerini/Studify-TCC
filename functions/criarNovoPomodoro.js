const buscaTempo = require('../functions/buscaTempo.js');
const conectaPomodoro = require('../functions/conectaPomodoro.js');

module.exports = {
	async criarNovoPomodoro(tempo, interaction) {
            
        let tempoPomodoro = buscaTempo.buscaTempo(tempo);
        if (!interaction.member.voice.channel) {
            await interaction.reply('❌ Você precisa estar em um canal de voz para iniciar o Pomodoro!');
            return;
        }

        conectaPomodoro.conectaPomodoro(tempoPomodoro, interaction)
}}