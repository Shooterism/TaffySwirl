const Discord = require('discord.js');

const client = new Discord.Client({disableMentions: 'everyone'});
client.config = require('./src/settings.json');
client.version = require('./package.json').version;

// * All major dependencies are stored within the global object to efficiently share it between modules
global.client = client;

(async function(){
  // * Initializes events
  const init = require('./utils/init');
  await init.loadEvents();

  client.login(require('./src/token'));
})();