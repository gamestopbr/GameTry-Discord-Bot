const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const Fortnite = require("fortnite")
const ft = new Fortnite(botconfig.apikey);

module.exports.run = async (bot, message, args) => {
  message.delete();
  //fortnite rockyrun642 pc
  let username = args[0];
  let platform = args[1] || "pc";

  let data = ft.user(username, platform).then(data => {

      let stats = data.lifetimeStats;
      let kills = stats.find(s => s.stat == 'kills')
      let wins = stats.find(s => s.stat == 'wins')
      let kd = stats.find(s => s.stat == 'kd')
      let mPlayed = stats.find(s => s.stat == 'matchesPlayed')
      let tPlayed = stats.find(s => s.stat == 'timePlayed')
      let asTime = stats.find(s => s.stat == 'avgSurvivalTime');


      let embed = new Discord.RichEmbed()
      .setTitle("Fortnite Stats")
      .setAuthor(data.username)
      .setColor("#123456")
      .addField("Kills", kills.value, true)
      .addField("Wins", wins.value, true)
      .addField("KD", kd.value, true)
      .addField("Matches Played", mPlayed.value, true)
      .addField("Time Played", tPlayed.value, true)
      .addField("Average Survival Time", asTime.value, true)

        message.channel.send(embed);



  }).catch(e => {
    console.log(e)
    message.channel.send("Couldn't find that username in the database.")
  });


}

module.exports.help = {
  name: "fortnite"
}