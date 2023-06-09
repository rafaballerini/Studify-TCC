module.exports = {
	async buscaTempoFoco(tempo) {
        const tempos = {
            'vinteCincoCinco': 0.1,
            'trintaDez': 30,
            'quarentaCincoVinte': 40,
            'cinquentaTrinta': 50,
        };
        return tempos[tempo]
    },
};