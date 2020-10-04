module.exports = function() {
  console.log("event.message INIT...");                        // ! INIT

  // * Runs on client message asynchronously
  client.on("message", async message => {
    // ? This grabs serverConf. Should probably be done differently using parser?
    let serverConf = require(`../src/configs/${message.guild.id}/config.json`);
    //console.log("Message Call");                            // ! DEBUG
    // * Ignores bots...
    if(message.author.bot) return;
    // * ... and messages sent without prefix
    if(message.content.indexOf(serverConf.prefix) !== 0) return;
    //else(console.log("Prefix Call"));                       // ! DEBUG

    // * Takes message, seperates command and arguments
    // * Example: !say mew mew
    // * args = ["mew","mew"]
    // * command = say
    let args = message.content.slice(serverConf.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    //console.log(command + " " + args.join(" "));            // ! DEBUG
  });
}