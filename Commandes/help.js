const Discord = require(`discord.js`);

module.exports.run = async(client, message, args) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setTitle('Voici le menu "**Help**"')
    .setColor('#ff008a')
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(" \n **Help Modération: :man_police_officer: ** \n .help-mod \n ──────────── \n **Help Utilitaire: :bulb: ** \n .help-util \n ──────────── \n **Help NSFW: :underage: ** \n .help-NSFW \n ──────────── \n **Help Fun: :fireworks: ** \n .help-fun \n ──────────── ");
    message.channel.send(exampleEmbed);

    message.delete();
};

module.exports.help = {
    name: "help"
};