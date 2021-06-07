const { bytesToUnits } = require('../utils/formatter');

module.exports = (messageDelete) => {
  if (messageDelete.channel.type == 'dm') return;
  //serverConf = require(`../src/configs/${messageDelete.guild.id}/config.json`);
  if (messageDelete.author.bot) return;
  //console.log(`[${tools.timestamp()}] Message "${messageDelete}" by ${messageDelete.author.username + "#" + messageDelete.author.discriminator} has been deleted in #${messageDelete.channel.name}.`);
  //messHandler.deleteMessage(messageDelete, serverConf);

  const embed = {
    color: 0xff0000,
    author: {
      name: messageDelete.author.tag,
      icon_url: messageDelete.author.avatarURL,
    },
    description: `**Message sent by ${messageDelete.author} deleted in ${messageDelete.channel}**`,
    fields: [],
    timestamp: new Date(),
    footer: {
      text: `User ID: ${messageDelete.author.id} | Message ID: ${messageDelete.id}`,
    },
  };

  if (messageDelete.content) {
    embed.fields.push({
      name: 'Deleted Message',
      value: messageDelete.content,
    });
  }
  if (messageDelete.attachments ? messageDelete.attachments.size : false) {
    embed.fields.push({
      name: 'Attachments',
      value: messageDelete.attachments
        .map(
          (file) =>
            `(${bytesToUnits(file.size)}${
              file.height ? `, ${file.height}x${file.width}` : ''
            }) ${file.name}`
        )
        .join('\n'),
    });
  }

  messageDelete.guild.channels.cache
    .get('492687541712191488')
    .send({ embed: embed });
};
