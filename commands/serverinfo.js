const Discord = require("discord.js")
const moment = require("moment")

module.exports.run = async (bot, message, args) => {
let a;
let b;
let c;
let d;



let embed = new Discord.RichEmbed()
.setTitle(message.guild)
.setDescription("Server Info")
.setThumbnail(message.guild.iconURL)
.addField("User Count:", `**{${message.guild.memberCount}}**`)
.addField("Created On:", `**{${moment(message.guild.createdAt).format('M/D/YYYY h:mm a')}}**`)
.setFooter(`MC: [${message.guild.memberCount}] // User: [${message.author.username}] // Date: [${moment(message.createdAt).format('M/D/YYYY h:mm a')}]`, message.author.iconURL)

message.channel.send(embed)
  
}

module.exports.help = {
  name: "serverinfo"
}