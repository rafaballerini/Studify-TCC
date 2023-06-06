module.exports = {
	async buscaBackground(numeroPlanoFundo) {
        const backgrounds = {
            'basico': './assets/basico.jpeg',
            'cafeteria': './assets/coffeehouse.png',
        };
        return backgrounds[numeroPlanoFundo];
    },
};