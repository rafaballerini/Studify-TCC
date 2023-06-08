module.exports = {
	async buscaTempo(tempo, interaction) {
        const tempos = {
            'vinteCincoCinco': 25,
            'trintaDez': 30,
            'quarentaCincoVinte': 40,
            'cinquentaTrinta': 50,
        };
        return tempos[tempo]
    },
};