const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
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

	if (interaction.isStringSelectMenu()) {
		const selected = interaction.values[0];
		buscaDocs(selected, interaction);
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

async function buscaDocs(linguagem, interaction) {
	const docs = {
		'javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		'python': 'https://www.python.org',
		'csharp': 'https://learn.microsoft.com/en-us/dotnet/csharp/',
		'discordjs': 'https://discordjs.guide/',
		'java': 'https://docs.oracle.com/en/java/',
	};
	await interaction.reply(`Aqui está a documentação de ${linguagem}: ${docs[linguagem]}`);
}