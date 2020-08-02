const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) return message.reply("Mentionne quelqu'un ! ");
    let XD = args.join(" "); 

    urban(XD).first(json => {
        if(!json) return message.reply("Je n'ai pas trouvé ! ")

        let urbEmbed = new Discord.MessageEmbed()
        .setColor("#ff008a")
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Ecrit par: ${json.author}`);

        message.channel.send(urbEmbed)
    });


}

module.exports.help = {
    name: "unban"
}