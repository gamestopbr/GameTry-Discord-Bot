const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if (message.channel.nsfw === false) {
  return message.reply(":warning: This channel is not marked as NSFW")
  }

  message.channel.send({file:"B:/GameTry/lightshot.png"})
}

module.exports.help = {
  name: "nsfw"
}