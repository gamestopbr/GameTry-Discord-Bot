const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  var role = message.content.split(/\s+/g).slice(2).join(" ")
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send({embed: { color: red, description: `Sorry, You do not have the Administrator Permission!`}}).catch(console.error);
   if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send({embed: { color: red, description: `Sorry, You do not have the Manage Roles Permission!`}}).catch(console.error);
   if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send({embed: { color: red, description: `Sorry, I do not have the Manage Roles Permission!`}}).catch(console.error);
   if(message.mentions.users.size === 0) return message.channel.send({embed: { color: red, description: `Please specify a user!`}}).catch(console.error);
   if(message.guild.member(user) === message.guild.member(message.author)) return message.channel.send({embed: { color: red, description: `Sorry, You cannot give yourself a role!`}}).catch(console.error);
   if(message.guild.member(user).hasPermission("ADMINISTRATOR")) return message.channel.send({embed: { color: red, description: `Sorry, You cannot give a role to another Administrator!`}}).catch(console.error);
   if(!role) return message.channel.send({embed: { color: red, description: `Please specify a role to give to the user!`}}).catch(console.error);
   let roleName = message.guild.roles.find("name", role)
   if(!roleName) return message.channel.send({embed: { color: red, description: `Sorry, The role you specified is invalid!`}}).catch(console.error);
   if(message.guild.member(user).roles.has(roleName.id)) return message.channel.send({embed: { color: red, description: `That user already has that role!`}}).catch(console.error);
   if(!message.guild.member(user).roles.has(roleName.id)) message.channel.send({embed: { color: green, description: `Successfully given ${user.username} the ${role} Role!`}}).catch(console.error);
   return message.guild.member(user).addRole(roleName).catch(console.error);
}

module.exports.help = {
  name: "addrole"
}