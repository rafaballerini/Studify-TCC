const buscaTempoFoco = require('./buscaTempoFoco.js');
const buscaTempoDescanso = require('./buscaTempoDescanso.js');

module.exports = {
    iniciaCiclo(tempo, resourceYooDescanso, resourceYooFoco, player){
        let tempoPomodoroDescanso = 0.1
        let tempoPomodoroFoco = 0.2
        setTimeout(() => {
            player.play(resourceYooDescanso);
        
            setTimeout(() => {
                player.play(resourceYooFoco); 
            }, tempoPomodoroDescanso * 60 * 1000); 
        }, tempoPomodoroFoco * 60 * 1000); 
    }
}