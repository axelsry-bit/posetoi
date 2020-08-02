const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.MessageEmbed()
 .setTitle("Menu pour inviter le bot")
 .setDescription("[**Invite**](https://discord.com/api/oauth2/authorize?client_id=735908600341463121&permissions=8&scope=bot)")
 .setColor("#ff008a")
 .setThumbnail(bicon)
 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }