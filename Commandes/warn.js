const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'a pas la permission de faire cela !");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply("Tu dois mentioner quelqu'un pour l'avertir ");
  if (reason.length < 1) return message.reply('Tu na pas de raisons pour avertir.');

  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("Warn")
  .setColor("#ff008a")
  .setDescription(`Tu a été averti sur \`${message.guild.name}\` évite de recommencer, il pourrais y avoir des sanctions.`)
  .addField("Averti par", message.author.tag)
  .addField("Raison", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} à été averti.`)

}

exports.help = {
  name: 'warn'
};

