module.exports = () => {
  global.client.on("ready", async () => {
    console.log(`Bot initialised, currently serving ${client.users.cache.size} users in ${client.guilds.cache.size} guilds.`); 
    // * Sets Discord presence. Fetches global variable 'config' from client module bound to global object
    await client.user.setPresence({
      status:'dnd',
      activity: {
        name:`${client.config.version}`, 
        type:'PLAYING'}
    })
    //.then(console.log)                // ! DEBUG
    .catch(console.error);
  });
}
// * Requiring itself results in it running itself upon initialisation
require('./ready.js')();