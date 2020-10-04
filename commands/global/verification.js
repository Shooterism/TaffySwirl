exports.run = function (message) {
  if (message.guild.channels.cache.get("249513069447741442")) {
    if (message.channel.id === "249513069447741442") {
      if (!message.member.roles.cache.get("500236300117475359")) {
        message.member.roles.add("500236300117475359");
        message.delete().catch(O_o=>{}); 
        var mention = "Enjoy your stay!".replace("@user", message.member);
        message.guild.channels.cache.get("249513069447741442").send(mention);
        return;
      }
      else return;
    }
    else return;
  }
  else return; //? Potentially add a report to commandLogChannel stating that verify is not working in some way?
}