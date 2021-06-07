module.exports = (member) => {
  if (member.guild.id != '370605707965235200') return;
  const welcomeChannel = member.guild.channels.cache.get('454941425193451520');
  const verifyChannel = member.guild.channels.cache.get('467478036502151168');

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
