const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let pingembed = new Discord.RichEmbed()
  .addField("Ping!", "Ponged your ping!")
  .addBlankField(true)
  .addField("MS:", `${message.createdTimestamp - Date.now()}ms`)

  message.channel.send(pingembed)
}

module.exports.help = {
  name: "ping"
}