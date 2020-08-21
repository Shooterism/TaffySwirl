const Discord = require("discord.js");

const config = require("./src/settings.json");
const token = require("./src/token.json");

const ready = require ('./events/ready.js');
const message = require ('./events/message.js');

const client = new Discord.Client({disableEveryone:true});
client.Discord = Discord;

ready(client, config);

try{
  message(client, config);
}
catch(err){
  if(err){
    console.log(err)
  }
}

client.login(token);