const conectaPomodoro = require('../functions/conectaPomodoro.js');

module.exports = {
	async criarNovoPomodoro(tempo, interaction, client) {
        
        if (!interaction.member.voice.channel) {
            await interaction.reply('❌ Você precisa estar em um canal de voz para iniciar o Pomodoro!');
            return;
        }
        await interaction.reply(`✅ Seus estudos começaram!
**Você precisa continuar conectado(a) no canal de voz até fim do tempo de foco**, senão não serão contados os minutos que você estudar
Caso queria ouvir uma playlist diferente, use **/playlist** e envie a URL de uma playlist do Youtube!`);

        conectaPomodoro.conectaPomodoro(tempo, interaction, client)

}} 