exports.run = (message) => {
  const verificationChannel = '467478036502151168';
  const memberRole = '455175873138655232';

  if (message.channel.id !== verificationChannel) return;
  if (message.member.roles.cache.has(memberRole)) return;

  if (!message.deleted) message.delete();
  message.channel.send(`${message.author} Enjoy your stay!`);
  message.member.roles.add(memberRole);
}
