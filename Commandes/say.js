const Discord = require("discord.js");

module.exports.run = (client, message, args) =>{

let embed = new Discord.MessageEmbed()
  .setColor("#ff008a")
  .setDescription(args.join(" "))
  .setTitle('')
message.channel.send(embed);

message.delete();

};

module.exports.help = {
    name: "say"
}