const Discord = require("discord.js")
let botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .addField("Invite", `[Click Here](${botconfig.invite})`)
  .addField("Permissions:", "8 = ADMINISTRATOR")

  message.channel.send(embed)
}

module.exports.help = {
  name: "invite"
}