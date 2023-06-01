module.exports = {
	async buscaTechSelecionada(techSelecionada, interaction) {
        await interaction.reply(`Guia de ${techSelecionada} para você seguir com seus estudos: https://techguide.sh/pt-BR/path/${techSelecionada}`);
    },
};