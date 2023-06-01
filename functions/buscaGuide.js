const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
module.exports = {
	async buscaGuide(pressed, interaction) {
        const guides = {
            'frontend': 'https://techguide.sh/pt-BR/path/front-end/',
            'data': 'https://techguide.sh/pt-BR/path/data-science/',
            'cybersecurity': 'https://techguide.sh/pt-BR/path/cybersecurity/',
        };
        if (pressed == 'backend') {
            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('backendGuides')
                        .setPlaceholder('Nenhuma tecnologia selecionada')
                        .addOptions({
                            label: 'C#',
                            description: 'Veja o guia de estudos de C# ',
                            value: 'csharp',
                        },
                        {
                            label: 'Python',
                            description: 'Veja o guia de estudos de Python',
                            value: 'python',
                        },
                        {
                            label: 'PHP',
                            description: 'Veja o guia de estudos de PHP',
                            value: 'php',
                        },
                        {
                            label: 'Node.js',
                            description: 'Veja o guia de estudos de Node.js',
                            value: 'nodejs',
                        },
                        {
                            label: 'Java',
                            description: 'Veja a documentação de Java',
                            value: 'java',
                        },
                        ),
                );
            await interaction.reply({ content: 'Selecione uma das tecnologias abaixo para visualizar seu guia de estudos:', components: [row] });
            return
        } else if (pressed == 'mobile') {
            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('mobileGuides')
                        .setPlaceholder('Nenhuma tecnologia selecionada')
                        .addOptions({
                            label: 'Android',
                            description: 'Veja o guia de estudos de Android ',
                            value: 'android',
                        },
                        {
                            label: 'Flutter',
                            description: 'Veja o guia de estudos de Flutter',
                            value: 'flutter',
                        },
                        ),
                );
            await interaction.reply({ content: 'Selecione uma das tecnologias abaixo para visualizar seu guia de estudos:', components: [row] });
            return
        }   
        await interaction.reply(`Guia de ${pressed} para você seguir com seus estudos: ${guides[pressed]}`);
    },
};