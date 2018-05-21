const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .addField("Prefix", "gt-")
  .addField("~General Commands~", "Commands for  the general folk")
  .addField("Invite", "Sends a invite from the bot.")
  .addField("8ball", "Ask a question, and it will reply with its answer.")
  .addField("dice", "10 sided dice.")
  .addField("hello", ":wave:")
  .addField("nsfw", "Does not have NSFW pics, but, worth a try. I guess.")
  .addField("report", "Report a user breaking the rules")
  .addField("serverinfo", `Info for the server. (${message.guild})`)
  .addField("userinfo", `Info for the user. (${message.author})`)
  .addField("shortenURL", "Shorten an URL.")
  .addField("CTos", "Copyright Terms of Service.")
  .addField("say", "Type something after the command.")
  .addField("rr", "Role Request, suggestions for your server.")
  .addField("~Server Staff Commands~", "Commands for the server staff")
  .addField("ban", "Ban a user from your guild")
  .addField("kick", "Kick a user from your guild")
  .addField("~Game Commands", "Commands for games")
  .addField("fortnite (username) (platform)", "Command is broken. Anyone that uses it will be blacklisted from the bot.")
  .addField("~Owner Commands~", "Commands for bot owner")
  .addField("eval", "In-node code responder")
  .addField("restart", "Restart the bot with bot.login to log in the bot again")

  message.channel.send(helpembed)
}

module.exports.help = {
  name: "help"
}