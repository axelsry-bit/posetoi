const Discord = require(`discord.js`);

module.exports.run = async(client, message, args) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setTitle('**Help Fun**')
    .setColor('#ff008a')
    .setDescription("**Fun:** :fireworks: \n `8ball, cat, dog, gif (en réparation), rps`");
    message.channel.send(exampleEmbed);

    message.delete();
};

module.exports.help = {
    name: "help-fun"
};