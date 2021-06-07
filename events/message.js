const verify = require('../commands/global/verify');

const prefix = '&';

module.exports = (message) => {
  // * Ignores bots and regular messages
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  // ? Grabs serverConf. Should probably be done differently using parser?
  //const serverConf = require(`../src/configs/${message.guild.id}/config.json`);

  // * Takes message, seperates command and arguments
  const args = message.content.slice(prefix.length).trim().split(/\s+/g);
  const command = args.shift().toLowerCase();

  // TEMPORARY LAST MINUTE SOLUTION
  switch (command) {
    case 'verify':
      verify.run(message);
      break;
  }
};
