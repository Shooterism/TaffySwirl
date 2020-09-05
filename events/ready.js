module.exports = () => {
    global.client.on("ready", async () => {
        console.log(`Bot initialised, currently serving ${client.users.cache.size} users in ${client.guilds.cache.size} guilds.`); 
        await client.user.setPresence({
            status:'dnd',
            activity: {
                name:`${client.config.version}`, 
                type:'PLAYING'}
            })
        //.then(console.log)
        .catch(console.error);
    });
}

require('./ready.js')();