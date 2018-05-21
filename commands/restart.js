const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const bot = new Discord.Client({disableEveryone: true})


module.exports.run = async (bot, message, args) => {
  let botshutdown = new Discord.RichEmbed()
    .addField("Shutting Down", "Please wait... :loop:")
    .addField("Servers", bot.guilds.size)
    .addField("Users", bot.users.size)
    .addField("Requested By:", `${message.author.tag}`);
  let rebooted = new Discord.RichEmbed()
    .addField("Rebooted!", ":white_check_mark:")
    .addField("Servers", bot.guilds.size)
    .addField("Users", bot.users.size)
    .addField("Requested By:", `${message.author.tag}`)
    .addField("Ping:", `${message.createdTimestamp - Date.now()}ms`)
  if(message.author.id === botconfig.id) {
    message.channel.send(botshutdown)
    bot.destroy()
    .then(() => bot.login(botconfig.token))
    .then(() => message.channel.send(rebooted))
  }
}

module.exports.help = {
  name: "restart"
}