const { Client, Events, GatewayIntentBits, Collection, ActionRowBuilder, StringSelectMenuBuilder} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN } = process.env;
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	}
	else {
		console.log(`[AVISO] O comando em ${filePath} está com "data" ou "execute" ausente`);
	}
}

client.once(Events.ClientReady, c => {
	console.log(`${c.user.tag} está online!`);
});

client.login(TOKEN);

// Listener de interações com o bot
client.on(Events.InteractionCreate, async interaction => {
	// IF EMPREGO INICIADO

	if (interaction.isButton()) {
		const pressed = interaction.customId;
		buscaGuide(pressed, interaction);
	}

	if (interaction.isStringSelectMenu()) {
		if (interaction.customId == 'backendGuides') {
			const techSelecionada = interaction.values[0];
			buscaTechSelecionada(techSelecionada, interaction);
		}
		else if (interaction.customId == 'docs') {
			const selected = interaction.values[0];
			buscaDocs(selected, interaction);
		}
	}

	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);
	if (!command) {
		console.error('Comando não encontrado');
		return;
	}
	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply('Houve um erro ao executar esse comando!');
	}
});

async function buscaDocs(selected, interaction) {
	const docs = {
		'javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		'python': 'https://www.python.org',
		'csharp': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
		'discordjs': 'https://discordjs.guide/',
		'java': 'https://docs.oracle.com/en/java/',
	};
	await interaction.reply(`Aqui está a documentação de ${selected}: ${docs[selected]}`);
}

// desenvolver a partir daqui
async function buscaGuide(pressed, interaction) {
	const guides = {
		'frontend': 'https://techguide.sh/pt-BR/path/front-end/',
		'backend': '',
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
	}
	await interaction.reply(`Guia de ${pressed} para você seguir com seus estudos: ${guides[pressed]}`);
}

async function buscaTechSelecionada(techSelecionada, interaction) {
	await interaction.reply(`Guia de ${techSelecionada} para você seguir com seus estudos: https://techguide.sh/pt-BR/path/${techSelecionada}`);
}