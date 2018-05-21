const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!bUser) return message.channel.send({embed: {color: 12345, description: `Could not find user pinged.`}});
   let bReason = args.join(" ").slice(22);
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {color: 12345, description: `Sorry, I dont have the permission: MANAGE_MESSAGES`}});
   if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {color: 12345, description: `No kicku...`}});

   let kickEmbed = new Discord.RichEmbed()
   .setDescription("Ban")
   .setColor("#123456")
   .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
   .addField("Banned By", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Time", message.createdAt)
   .addField("Reason", bReason);

 let banchannel = message.guild.channels.find(`name`, `incidents`);
 if (!banchannel) return message.channel.send("Could not find incident channel.");

 message.delete().catch(O_o=>{});
 message.guild.member(bUser).ban(bReason)
 message.guild.bUser(`You have been banned in the server ${message.guild.name} by ${message.author} for the reason: ${bReason}.`)
 banchannel.send(kickEmbed)
}

module.exports.help = {
  name: 'ban'
}