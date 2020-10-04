const Discord = require('discord.js');

const messageDelete = require (__dirname + '/events/messageDelete.js');
const messageUpdate = require (__dirname + '/events/messageUpdate.js');

// * All major dependencies are stored within the global object to efficiently share it between modules
global.client = new Discord.Client({disableEveryone:true});
client.Discord = Discord;
client.config = require('./src/settings.json');
client.message = require('./events/message.js');

// * Initialisation of all major systems
console.log("Initialising modules...\n");             // ! INIT
try{
  client.message();
  // * Logs edited messages.
  messageUpdate.log();
  // * Logs deleted messages.
  messageDelete.log();
}
catch(err){
  console.log(err)
}
finally{(console.log("\nDone."))};                    // ! INIT

// * Initialises and runs ready event
require ('./events/ready.js');



client.login(require('./src/token.json'));