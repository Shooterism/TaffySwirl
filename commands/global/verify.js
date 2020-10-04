exports.run = (message) => {
  const verificationChannel = '249513069447741442';
  const memberRole = '500236300117475359';

  if (message.channel.id !== verificationChannel) return;
  if (message.member.roles.has(memberRole)) return;

  if (!message.deleted) message.delete();
  message.channel.send(`${message.author} Enjoy your stay!`);
  message.member.roles.add(memberRole);
}