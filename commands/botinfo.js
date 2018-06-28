const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})
const os = require("os")
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
  let botinfoembed = new Discord.RichEmbed()
    .addField("Bot Username", bot.user.tag)
    .addField("Bot ID", bot.user.id)
    .addField("Users", bot.users.size)
    .addField("Guilds", bot.guilds.size)
    .addField("Arch", os.arch())
    .addField("Host Name", os.hostname())
    .addField("Uptime", moment(bot.user.uptime).format('h hours mm minutes ss "seconds"'))
    .setFooter(`${bot.user.tag}`)
    message.channel.send(botinfoembed)
}

module.exports.help = {
  name: "botinfo"
}