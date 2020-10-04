const prefix = '!';

module.exports = (message) => {
  // * Ignores bots and regular messages
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  // ? Grabs serverConf. Should probably be done differently using parser?
  //const serverConf = require(`../src/configs/${message.guild.id}/config.json`);

  // * Takes message, seperates command and arguments
  const args = message.content.slice(prefix.length).trim().split(/\s+/g);
  const command = args.shift().toLowerCase();

  // * TEMPORARY LAST MINUTE SOLUTION
  switch (command) {
    case 'verify':
      // * There's no need to escape that here, it can be removed
      // if (args.length) {
      //   message.channel.send('This command doesn\'t take any arguments!');
      //   return;
        // }
      const verify = require('../commands/global/verify.js');
      verify.run(message);
      break;
  }
}