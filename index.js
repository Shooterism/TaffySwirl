const Discord = require("discord.js");

const message = require ('./events/message.js');

global.client = new Discord.Client({disableEveryone:true});
client.Discord = Discord;
client.config = require("./src/settings.json");

console.log("Initialising modules...\n");
try{
  message();
}
catch(err){
  if(err){
    console.log(err)
  }
};
console.log("\nDone.");

require ('./events/ready.js')
client.login(require("./src/token.json"));