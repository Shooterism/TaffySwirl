const Discord = require("discord.js");
const config = require(__dirname + "/src/settings.json");
const token = require("src/token.json");

const client = new Discord.Client();
client.Discord = Discord;

client.login(token.token);