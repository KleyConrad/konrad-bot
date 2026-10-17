// Configurações do bot Konrad.
// O ID da aplicação vem do arquivo .env (DISCORD_CLIENT_ID); não é segredo,
// mas assim você copia direto do portal sem precisar mexer no código.
require('dotenv').config();

module.exports = {
  ID_APLICACAO: process.env.DISCORD_CLIENT_ID,
};
