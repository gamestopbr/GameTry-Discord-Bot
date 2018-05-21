const Discord = require("discord.js")
const colorss = require("./colors.json")

module.exports.run = async (bot, message, args) => {
  let color_name = args.join(" ")
  if(!color_name) return message.reply("Use a valid color!!!")
  let colors = ["Red", "Blue", "Green", "Orange", "Pink", 'Purple']
  if(!colors) return ("Invalid Color. Available colors: Red, Blue, Green, Orange, Pink, Purple")

  if (colors = "Red") {
  let embed1 = new Discord.RichEmbed()
  .addField("Color Name", color_name)
  .addField("C -> H", colorss.red)
  message.channel.send(embed1)
}



}

module.exports.help = {
  name: "colors"
}