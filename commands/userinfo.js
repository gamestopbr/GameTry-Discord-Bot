const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => { 
  var year = message.author.createdAt.getFullYear()
  var month = message.author.createdAt.getMonth()
  var day = message.author.createdAt.getDate()
  var men = message.mentions.users.first();  
  let args1 = message.content.split(' ').slice(1).join(' ');
  if (args1 == '') {
  var z = message.author;
  }else {
  var z = message.mentions.users.first();
  }
  
  let d = z.createdAt;          
  let n = d.toLocaleString();   
  let x;                       
  let y;                        
  
  if (z.presence.game !== null) {
  y = `${z.presence.game.name}`;
  } else {
  y = "Not playing";
  }
  if (z.bot) {
  var w = 'Bot';
  }else {
  var w = 'Discord user';
  }
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField(':busts_in_silhouette:  𝙪𝙨𝙚𝙧𝙞𝙣𝙛𝙤','ﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠﾠ')
  .addField(':scroll: **Name**',`[** <@` + `${z.id}` + `> **]`, true)
  .addField(':id: **ID**', "[** "+ `${z.id}` +" **]", true)
  .addField(':video_game: **Playing**','[** '+y+' **]', true)
  .addField(':spy: **Account type**',"[** "+ w + " **]", true)    
  .addField(':hash: **Discrim**',"[** #" +  `${z.discriminator} **]`, true)
  .addField('**📆 created on** ',year + "-"+ month +"-"+ day, true)    
  .addField("**:clock1: joined at**", message.member.joinedAt.toLocaleString (), true)    
  .addField("**💬 Last message**",`[** ${message.author.lastMessage} **]`, true)
  .addField("**:chart_with_downwards_trend:  User ping**",`[** ${Date.now() - message.createdTimestamp} **]` + '** ms **', true)
  .setFooter(message.author.username, message.author.avatarURL)            
  
  message.channel.send({embed});
      if (!message) return message.reply('**Mention the right way ❌ **').catch(console.error);
  
  }
  

module.exports.help = {
  name: "userinfo"
}