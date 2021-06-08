module.exports = (member) => {
  if (member.guild.id != '370605707965235200') return;
  const welcomeChannel = member.guild.channels.cache.get('454941425193451520');
  const verifyChannel = member.guild.channels.cache.get('467478036502151168');
  const cmdChannel = member.guild.channels.cache.get('587564376274239493');

  const twitterBotRegex = /twitter\.com\/h0nde/gi;
  const twitterBotReason = 'twitter h0nde bot';

  if (twitterBotRegex.test(member.user.username)) {
    member
      .ban({ days: 1, reason: twitterBotReason })
      .then((member) => {
        cmdChannel.send(`Auto-banned ${member.user.tag}, reason: ${twitterBotReason}`);
      })
      .then((err) => {
        console.loge(err);
        cmdChannel.send(`Failed to ban ${member.user.tag}`);
      });
    return;
  }

  if (welcomeChannel) {
    const embed = {
      color: 0x00ff00,
      footer: {
        text: member.user.tag,
        icon_url: member.user.avatarURL({ dynamic: true }),
      },
      timestamp: member.joinedAt,
      author: {
        name: 'Welcome!',
        icon_url: member.user.avatarURL({ dynamic: true }),
      },
      thumbnail: {
        url: member.user.avatarURL({ dynamic: true }),
      },
      description: `${member.user} has joined the Server!`,
    };
    welcomeChannel.send({ embed: embed });
  }

  if (verifyChannel) {
    verifyChannel.send(`Welcome to the server ${member.user}! Please read the rules in order to learn how to verify yourself! Have a nice stay!`);
  }
};
