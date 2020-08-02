const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let CHOIX_RPS = [
    'PIERRE',
    'PAPIER',
    'CISEAUX'
  ];
  let CHOIX_USER = args.join(' ').toUpperCase();

  if (!CHOIX_RPS.includes(CHOIX_USER)) {
    return message.channel.send(":x: Erreur mauvais usage\nExemple : prefix + rps PIERRE/PAPIER/CISEAUX")
  }

  let CHOIX_BOT = CHOIX_RPS[Math.floor(Math.random() * CHOIX_RPS.length)];

  let result = "J'ai gagné ! :D";
  if (CHOIX_USER === CHOIX_BOT) {
    result = 'égalité :/';
  }
  else if (CHOIX_USER === 'PIERRE') {
    if (CHOIX_BOT === 'CISEAUX') {
      result = "Tu as gagné bravo :D";
    }
  }
  else if (CHOIX_USER === 'PAPIER') {
    if (CHOIX_BOT === 'PIERRE') {
      result = "Tu as gagné bravo :D";
    }
  }
  else if (CHOIX_USER === 'CISEAUX') {
    if (CHOIX_BOT === 'PAPIER') {
      result = "Tu as gagné bravo :D";
    }
  }
  var resultat_embed = new Discord.MessageEmbed()
  .setDescription(`Tu as choisis **${CHOIX_USER}**, j'ai choisis **${CHOIX_BOT}**. *${result}*`)
  .setColor('#ff008a')
  await message.channel.send(resultat_embed);
};

module.exports.help = {
  name: "rps"
}
