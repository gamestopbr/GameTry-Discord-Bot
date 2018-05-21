const Discord = require("discord.js")
let coins = require("../coins.json")

module.exports.run = async (bot, message, args) => {
if(!coins[message.author.id]){
  coins[message.author.id] = {
    coins: 0
  };
}


  let uCoins = coins[message.author.id].coins;

  let coininfoembed = new Discord.RichEmbed()
    .setColor("#12345")
    .addField(":money:", uCoins)
    .addField("UID:", message.author.id)
  message.channel.send(coininfoembed)
}

module.exports.help = {
  name: "coininfo"
}