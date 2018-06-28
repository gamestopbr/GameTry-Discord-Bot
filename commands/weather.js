const Discord = require("discord.js")
const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    weather.find({search: args.join(" "), degreeType: "F"}, function(err, result) {
        if(err) message.channel.send(err);

        if(result === undefined || result.lentgh === 0) {
            message.channel.send("**Please enter a valid location.**")
            return;
        }
        var current = result[0].current
        var location = result[0].location

        message.channel.send({embed: {color: 12341, description: `
        [**Location**]: [${current.observationpoint}]
        [**Timezone**]: [${location.timezone}]
        [**Degree Type**]: [${location.degreetype}]
        [**Temperature**]: [${current.temperature}]
        [**Feels Like**]: [${current.feelslike}]
        [**Winds**]: [${current.winddisplay}]
        [**Humidity**]: [${current.humidity}]
        `}})
    })
}

module.exports.help = {
    name: "weather"
}