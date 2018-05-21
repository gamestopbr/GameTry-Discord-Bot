const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!kUser) return message.channel.send({embed: {color: red, description: `Could not find user pinged.`}});
   let kReason = args.join(" ").slice(22);
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {color: red, description: `Sorry, I dont have the permission: MANAGE_MESSAGES`}});
   if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {color: red, description: `No kicku...`}});

   let kickEmbed = new Discord.RichEmbed()
   .setDescription("Kick")
   .setColor(blue)
   .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
   .addField("Kicked By", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Time", message.createdAt)
   .addField("Reason", kReason);

 let kickchannel = message.guild.channels.find(`name`, `incidents`);
 if (!kickchannel) return message.channel.send("Could not find incident channel.");
 
 message.delete().catch(O_o=>{});
 message.guild.member(kUser).kick(kReason)
 kickchannel.send(kickEmbed)
}

module.exports.help = {
  name: "kick"
}