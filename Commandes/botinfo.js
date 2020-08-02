const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.MessageEmbed()
    .setColor("#ff008a")
    .setThumbnail(bicon)
    .addField("Bot Name", ` :robot: ${bot.user.username}`, inline)
    .addField("Bot Owner", " :trophy: <@&694863732894990386>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `:bust_in_silhouette: ${usersize}`, inline)
    .addField("Bot Library", " :books: Discord.js", inline)
    .addField("Created On", bot.user.createdAt)
    .setFooter(`Information about: ${bot.user.username}. Developed by: Astro#5555 `)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}