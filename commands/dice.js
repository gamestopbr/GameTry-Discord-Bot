const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let dicenum = ["1","2","3","4","5","6","7","8","9","10"];
  let result = Math.floor((Math.random() * dicenum.length));

  let diceembed = new Discord.RichEmbed()
    .addField("Dice", "1 -> 10")
    .addField("Result", dicenum[result])

    message.channel.send(diceembed)
}
module.exports.help = {
  name: "dice"
}