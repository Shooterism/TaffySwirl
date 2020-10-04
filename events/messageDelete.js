exports.log = function () {
  client.on("messageDelete", async messageDelete => {
    if (messageDelete.channel.type === "dm") return;
    //serverConf = require(`../src/configs/${messageDelete.guild.id}/config.json`);
    if(messageDelete.author.bot) return;
    //console.log(`[${tools.timestamp()}] Message "${messageDelete}" by ${messageDelete.author.username + "#" + messageDelete.author.discriminator} has been deleted in #${messageDelete.channel.name}.`);
    //messHandler.deleteMessage(messageDelete, serverConf);

    let embed = {
      embed: {
        color: 0xFF0000,
        author: {
          name: `${messageDelete.author.username + "#" + messageDelete.author.discriminator}`,
          icon_url: messageDelete.author.avatarURL
        },
        description: `**Message sent by ${messageDelete.author} deleted in ${messageDelete.channel}.**`,
        fields: [],
        timestamp: new Date(),
        footer: {
          text: `User ID: ${messageDelete.author.id} | Message ID: ${messageDelete.id}`
        },
      }
    }
    if (messageDelete.content) embed.embed.fields.push({
      name: 'Deleted Message',
      value: messageDelete.content
    });
    if (messageDelete.attachments ? messageDelete.attachments.size : false) embed.embed.fields.push({
      name: 'Attachments',
      value: messageDelete.attachments.map(file => `(${bytesToUnits(file.filesize)}${file.height ? `, ${file.height}x${file.width}` : ''}) ${file.filename}`).join('\n')
    });
    messageDelete.guild.channels.cache.get("512313721251430401").send(embed);
  })
}

function bytesToUnits(n){
  n = parseInt(n);
  let str = [];
  if (n >= 1024 * 1024 * 1024) cut(1024 * 1024 * 1024, 'GB');
  if (n >= 1024 * 1024) cut(1024 * 1024, 'MB');
  if (n >= 1024) cut(1024, 'kB');
  if (!str.length && n < 1024) cut(1, 'B');
  function cut(v, c){
      str.push(Math.floor(n / v)+c);
      n = n % v;
  }
  return str.join(' ');
}