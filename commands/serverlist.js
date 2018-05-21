const Discord = require("discord.js")
const config = require("../botconfig.json")
const bot = new Discord.Client({disableEveryone: true})

module.exports.run = async (bot, message, args) => {
let serverList = bot.guilds.map(g => g.name).join(" | ")
  if(message.author.id === config.id) {
    console.log(serverList)
    message.channel.send(serverList)
  }
}

module.exports.help = {
  name: "serverlist"
}