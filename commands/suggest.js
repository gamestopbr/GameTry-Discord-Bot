const Discord = require("discord.js")
const fs = require("fs")
const suggestion = require("./suggestion.json")
if(!suggestion) return fs.createFile({name: suggestion.json});

module.exports.run = async (bot, message, args) => {
  let suggestions = args.join(" ");
  if(!suggestion) return fs.createFile({name: suggestion.json});



  let suggest = new Discord.RichEmbed()
  .addField("Suggestor", message.author)
  .addField("Suggestion", suggestions)

  message.channel.send(suggest)
}
module.exports.help = {
  name: "suggest"
}