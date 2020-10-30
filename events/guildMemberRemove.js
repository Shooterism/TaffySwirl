export default (member) => {
  if (member.guild.id != '370605707965235200') return;

  const welcomeChannel = member.guild.channels.cache.get('454941425193451520');

  if (!welcomeChannel) return;
  const embed = {
    color: 0xff0000,
    footer: {
      text: member.user.tag,
      icon_url: member.user.avatarURL({ dynamic: true }),
    },
    timestamp: new Date(),
    author: {
      name: 'Member left!',
      icon_url: member.user.avatarURL({ dynamic: true }),
    },
    thumbnail: {
      url: member.user.avatarURL({ dynamic: true }),
    },
    description: `${member.user} has left the Server!`,
  };
  welcomeChannel.send({ embed: embed });
};
