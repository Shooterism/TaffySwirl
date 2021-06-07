module.exports = async () => {
  console.log(
    `Bot initialised, currently serving ${client.users.cache.size} users in ${client.guilds.cache.size} guilds.`
  );
  // * Sets Discord presence.
  await client.user
    .setPresence({
      status: 'dnd',
      activity: {
        name: `v${client.version}`,
        type: 'PLAYING',
      },
    })
    .then(console.log('Updated client presence.'))
    .catch(console.error);
};