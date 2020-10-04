exports.log = function () {
  client.on("messageUpdate", async (messageUpdate, message) => {
    if (message.channel.type === "dm") return;
    //serverConf = require(`../src/configs/${messageUpdate.guild.id}/config.json`);
    if (message.author.bot || message.content === messageUpdate.content) return;
    //console.log(`[${tools.timestamp()}] Message "${messageUpdate}" by ${message.author.username + "#" + message.author.discriminator} has been edited in #${messageUpdate.channel.name}, is now "${message}".`);
    //messHandler.editMessage(message, messageUpdate, serverConf);

    const embed = new client.Discord.MessageEmbed()
      .setColor('0x19d8c0')
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(`**Message sent by ${message.author} edited in ${message.channel}.**`)
      .addFields(
        {name: "Previous Message", value: messageUpdate},
        {name: "New Message", value: message},
      )
      .setTimestamp(new Date())
      .setFooter(`User ID: ${message.author.id} | Message ID: ${message.id}`);

    message.guild.channels.cache.get("512313721251430401").send(embed);
  })
}