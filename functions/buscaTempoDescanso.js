module.exports = {
	async buscaTempoDescanso(tempo) {
        const tempos = {
            'vinteCincoCinco': 5,
            'trintaDez': 10,
            'quarentaCincoVinte': 20,
            'cinquentaTrinta': 30,
        };
        return tempos[tempo]
    },
};