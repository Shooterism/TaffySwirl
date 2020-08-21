module.exports = (client, config) => {
    client.on("ready", async () => {
        console.log(`Bot initialised, currently serving ${client.users.cache.size} users in ${client.guilds.cache.size} guilds.`); 
        await client.user.setPresence({
            status:'dnd',
            activity: {
                name:`${config.version}`, 
                type:'PLAYING'}
            })
        .then(console.log)
        .catch(console.error);
    });
}