const { bytesToUnits } = require('../utils/formatter');

module.exports = async (messageOld, messageNew) => {
  if (messageNew.channel.type === 'dm') return;
  //serverConf = require(`../src/configs/${messageUpdate.guild.id}/config.json`);
  if (messageNew.author.bot || !messageNew.editedTimestamp) return;
  //console.log(`[${tools.timestamp()}] Message "${messageUpdate}" by ${message.author.username + "#" + message.author.discriminator} has been edited in #${messageUpdate.channel.name}, is now "${message}".`);

  const embed = {
    color: 0x19d8c0,
    author: {
      name: messageNew.author.tag,
      icon_url: messageNew.author.avatarURL
    },
    description: `**Message sent by ${messageNew.author} edited in ${messageNew.channel}**`,
    fields: [],
    timestamp: new Date(),
    footer: {
      text: `User ID: ${messageNew.author.id} | Message ID: ${messageNew.id}`
    }
  }

  if (messageOld.content) {
    embed.fields.push({
      name: 'Previous Message',
      value: messageOld.content
    });
  }
  if (messageNew.content) {
    embed.fields.push({
      name: 'New Message',
      value: messageNew.content
    });
  }
  if (messageNew.attachments ? messageNew.attachments.size : false){
    embed.fields.push({
        name: 'File Attachments',
        value: messageNew.attachments.map(file => `(${bytesToUnits(file.size)}${file.height ? `, ${file.height}x${file.width}` : ''}) ${file.name}`).join('\n')
    });
  }

  messageNew.guild.channels.cache.get('492687541712191488').send({embed: embed});
}
