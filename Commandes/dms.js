const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'a pas la permission de faire cela !");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply("Tu dois mentioner quelqu'un pour l'avertir ");

  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle(" :cherries: Chill Room")
  .setColor("#ff008a")
  .setDescription(`Salut, tu cherches un serveur communotaire ou tu peux discuter,t'amuser, faire des rencontres ? \n . \n Ce serveur est fais pour toi ! \n . \n https://discord.gg/peMMvW5 .`);

  user.send(dmsEmbed);

  message.delete();

}

exports.help = {
  name: 'mp'
};

