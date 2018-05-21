const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
  let b_type = args[0]
  if(!b_type) return("What kind of bot is it? Moderation, Gaming, what?????")
  let bot_id = args[1]
  if(!bot_id) return message.reply("Use a valid Bot ID!")
  let prefix = args[2]
  if(!prefix) return message.reply("Valid ID, but... no prefix.")
  let Ainvite = `https://discordapp.com/oauth2/authorize?client_id=${bot_id}&scope=bot&permissions=8`
  let invite = `https://discordapp.com/oauth2/authorize?client_id=${bot_id}&scope=bot`
  let au = message.author
  let au1 = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))

  let embed = new Discord.RichEmbed()
  .setTitle("Thanks for submitting your bot!")
  .addField("Bot Type:", b_type)
  .addField("Bot ID:", bot_id)
  .addField("Prefix:", prefix)
  .addField("Bot submitted by:", au)
  .addField("ADMINISTRATOR Perm Invite:", `[Click Here](${Ainvite})`)
  .addField("Non-Admin Invite:", `[Click Here](${invite})`)
  .setFooter("Note: If this message is deleted, or you see a check mark :white_check_mark:, that means your bot has been accepcted. Otherwise, you will see a :x:")

  message.delete().catch(O_o=>{});
  message.channel.send(embed)
} 

module.exports.help = {
  name: "sb"
}