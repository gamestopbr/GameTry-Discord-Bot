const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  if(message.author.id === botconfig.id) {
    let playing = args.join(" ")
    bot.user.setActivity(`${playing}`, {type: "STREAMING"})
    message.channel.send(`Changed to ${playing}`)
  }
}

module.exports.help = {
  name: "stream"
}