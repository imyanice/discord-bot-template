const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in. He is in ${client.guilds.cache.size} !`);
};


client.login(process.env.BOT_TOKEN);
