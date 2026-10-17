require('dotenv').config();

const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
});

// Comando !transmitir.
const iniciarTransmissao = require('./transmissao');
iniciarTransmissao(client);

// Site Konrad Screen Share.
const iniciarWeb = require('./web');
iniciarWeb(client);

client.once('clientReady', () => {
  console.log(`KONRAD online como ${client.user.tag}!`);
});

// Verifica se o token foi configurado.
if (!process.env.DISCORD_TOKEN) {
  throw new Error('DISCORD_TOKEN não foi configurado no arquivo .env.');
}

// Inicia o bot.
client.login(process.env.DISCORD_TOKEN);
