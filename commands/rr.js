const Discord = require("discord.js")

module.exports.run = async (bot, message,args) => {
  let rmes = args.join(" ")
  let requests = message.guild.channels.find("name", "requests")
  let au = message.author;
  if(!requests) return message.reply("The requests channel does not exist.")

  let rembed = new Discord.RichEmbed()
  .setTitle("Suggestion/Role Request")
  .addField("Suggestion/RR", rmes)
  .addField("Requested", message.createdAt)

  message.delete().catch(O_o=>{});
  message.channel.send("It has been submitted!")

  requests.send(rembed)
}

module.exports.help = {
  name: "rr"
}