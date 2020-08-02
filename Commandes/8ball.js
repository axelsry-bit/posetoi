const Discord = require("discord.js")
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

   //!8ball question
   if(!args[1]) return message.reply("S'il te plaît pose moi une question avec deux mots ou plus !");
   let replies = ["Oui", "Non", "Je ne sais pas", "Demande moi plus tard", "Cyka", "Je ne suis pas sur!", "Non s'il te plait", "A vous de me dire", "Sans aucun doute", "Je ne peux pas prédire maintenant", ];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" ");

   let ballembed = new Discord.MessageEmbed()

   .setAuthor(message.author.username)
   .setColor("#ff008a")
   .addField("Question", question)
   .addField("Réponse", replies[result]);

   message.channel.send(ballembed)

   message.delete();


}

   module.exports.help = {
       name: "8ball"
   }