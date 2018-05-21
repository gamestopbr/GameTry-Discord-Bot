const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let uicon = message.author.iconURL;
  let author = message.author.tag;


  let userembed = new Discord.RichEmbed()
  .setDescription("User Info")
  .setAuthor(author)
  .setColor("#123455")
  .addField("Profile made at:", message.author.createdAt)
  .addField("Joined server at:", message.member.joinedAt)
  .addField("Playing:", message.author.playing)
  .addField("IconURL:", uicon)

  message.channel.send(userembed)
}

module.exports.help = {
  name: "userinfo"
}