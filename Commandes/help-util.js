const Discord = require(`discord.js`);

module.exports.run = async(client, message, args) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setTitle('**Help Utilitaire**')
    .setColor('#ff008a')
    .setDescription("**Utilitaire:** :bulb: \n ` .botinfo, .clear, .invite, .ping, .say, .stat, .support, .icon` ");
    message.channel.send(exampleEmbed);

    message.delete();
};

module.exports.help = {
    name: "help-util"
};