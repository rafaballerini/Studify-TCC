const documentacao = require('./functions/buscaDocs');
const techguide = require('./functions/techguideBasics')
const guide = require('./functions/buscaGuide')
const adicionaPlanoFundo = require('./functions/adicionaPlanoFundo.js')
const alteraPlanoFundo = require('./functions/alteraPlanoFundo.js')
const criaPomodoro = require('./functions/criarNovoPomodoro.js')
const { Client, ActivityType, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN } = process.env;
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const app = require('./src/app.js');
const port = process.env.PORT || 3000;
const Personagem = require('./src/models/Personagem.js')

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})

const client = new Client({ intents: [GatewayIntentBits.Guilds,
GatewayIntentBits.GuildVoiceStates] });
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
	client.user.setActivity("🍅 Bora estudar?", { type: ActivityType.Listening });
});

client.login(TOKEN);
client.on(Events.InteractionCreate, async interaction => {
	// console.log(interaction)
	if (await Personagem.findOne({ personagemId: interaction.user.id}) || interaction.commandName == 'codar'){
		if (interaction.isButton()) {
			if (interaction.message.interaction.commandName == 'techguide'){
				const pressed = interaction.customId;
				guide.buscaGuide(pressed, interaction);
			} else if (interaction.message.interaction.commandName == 'comprarambiente'){
				const ambienteSelecionadoCompra = interaction.customId;
				adicionaPlanoFundo.adicionaPlanoFundo(ambienteSelecionadoCompra, interaction);
			} else if (interaction.message.interaction.commandName == 'alterarambiente'){
				const ambienteSelecionadoAlterar = interaction.customId;
				alteraPlanoFundo.alteraPlanoFundo(ambienteSelecionadoAlterar, interaction);
			}
		}

		if (interaction.isStringSelectMenu()) {
			if (interaction.customId == 'backendGuides' || interaction.customId == 'mobileGuides') {
				const techSelecionada = interaction.values[0];
				techguide.buscaTechSelecionada(techSelecionada, interaction);
			}
			else if (interaction.customId == 'docs') {
				const selected = interaction.values[0];
				documentacao.buscaDocs(selected, interaction);
			} else if (interaction.customId == 'pomodoroFoco'){
				const tempo = interaction.values[0];
				criaPomodoro.criarNovoPomodoro(tempo, interaction, client);
			}
		}

		if (interaction.isModalSubmit()) {
			await interaction.reply({ content: 'Lembrete adicionado com sucesso!' });
			const lembreteTitulo = interaction.fields.getTextInputValue('tituloLembrete');
			const lembreteConteudo = interaction.fields.getTextInputValue('conteudoLembrete');
			console.log({ lembreteTitulo, lembreteConteudo });
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
	} else {
		await interaction.reply(`❌ Você ainda não iniciou o seu primeiro emprego!
Para isso, utilize o comando **/codar** primeiro`);
	}
})