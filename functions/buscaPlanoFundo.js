module.exports = {
	async buscaBackground(numeroPlanoFundo) {
        const backgrounds = {
            'basico': './assets/basico.jpeg',
            'cafeteria': './assets/coffeehouse.png',
            'quarto': './assets/quarto.jpeg',
            'lago': './assets/lago.jpeg',
            'biblioteca': './assets/biblioteca.jpeg',
            'faculdade': './assets/faculdade.jpeg',
        };
        return backgrounds[numeroPlanoFundo];
    },
};