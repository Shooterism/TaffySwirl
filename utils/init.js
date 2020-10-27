const fs = require('fs');

exports.loadEvents = async () => {
  let files = await fs.promises.readdir('./events');
  for (file of files){
    // ignore non-js files
    if (!file.endsWith('.js')) return;

    const name = file.split('.')[0];
    const event = require(`../events/${name}`);
    client.on(name, event);
    console.log(`Loaded ${name}`);
    delete require.cache[require.resolve(`../events/${file}`)];
  }
}