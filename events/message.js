const verify = require('../commands/global/verification.js');

module.exports = function() {
  console.log("event.message INIT...");                        // ! INIT
  const prefix = "!";

  // * Runs on client message asynchronously
  client.on("message", async message => {
    // ? This grabs serverConf. Should probably be done differently using parser?
    let serverConf = require(`../src/configs/${message.guild.id}/config.json`);
    //console.log("Message Call");                            // ! DEBUG
    // * Ignores bots...
    if(message.author.bot) return;
    // * ... and messages sent without prefix
    if(message.content.indexOf(prefix) !== 0) return;
    //else(console.log("Prefix Call"));                       // ! DEBUG

    // * Takes message, seperates command and arguments
    // * Example: !say mew mew
    // * args = ["mew","mew"]
    // * command = say
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    //TEMPORARY LAST MINUTE SOLUTION BELOW

    if(command == "verify") {
      if(args.length != 0) {
        message.channel.send("This command doesn't take any arguments!");
      }
      else{
        verify.run(message)
      }
    }

    //console.log(command + " " + args.join(" "));            // ! DEBUG
  });
}