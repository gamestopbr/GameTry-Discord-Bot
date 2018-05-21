const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const bot = new Discord.Client({disableEveryone: true})

module.exports.run = async (bot, message, args) => {
  if(message.author.id === botconfig.id) {
    let motd = args.join(" ")
    bot.user.setActivity(`${bot.users.size} users! | ${bot.guilds.size} guilds! | MOTD: ${motd}`)
    message.channel.send({embed: {color: 12345, description: `Success! The MOTD has ben set to: ${motd}`}})
  }
}

module.exports.help = {
  name: "motd"
}