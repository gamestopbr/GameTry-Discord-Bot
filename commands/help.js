const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o=>{})
  message.channel.send(`:mailbox: | It has been sent via DM.`)
  .then(message => {
    message.delete(5000)
  })
  message.author.send({embed: {color: 25502, description: `
  [**General Commands**]: [Invite][8ball][dice]
  [**Fun Commands**]: [say]
  [**Server Commands**]: [report][serverinfo]
  [**Admin Commands**]: [ban][kick]
  [**Utility Commands**]: [shortenURL][CTos][weather]
  [**Game Commands**]: [dice][8ball]
  [**Coins**]: [coininfo][pay]
  [**NSFW Commands**]: [nsfw]
  [**Owner Commands**]: [eval][restart]`}})

}

module.exports.help = {
  name: "help"
}