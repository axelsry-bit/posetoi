const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.MessageEmbed()
    .setColor("#ff008a")
    .setThumbnail(bicon)
    .setTitle("Support Info")
    .addField("Pour voir les commandes du bot", "`g!help`")
    .addField("Pour reporter un bug", "`a!contact`")
    .addField("Si vous avez besoin de plus d'aide", "[Support Sever](https://discord.gg/R6ysFj4)")

    message.channel.send(embed)

            message.delete();
}

module.exports.help = {
    name: "support"
}