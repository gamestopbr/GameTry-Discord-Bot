const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.channel.send({file:"B:/GameTry/lightshot.png"})
}

module.exports.help = {
  name: "CTos"
}