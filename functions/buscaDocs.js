module.exports = {
	async buscaDocs(selected, interaction) {
        const docs = {
            'javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            'python': 'https://www.python.org',
            'csharp': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
            'discordjs': 'https://discordjs.guide/',
            'java': 'https://docs.oracle.com/en/java/',
        };
        await interaction.reply(`Aqui está a documentação de ${selected}: ${docs[selected]}`);
    },
};