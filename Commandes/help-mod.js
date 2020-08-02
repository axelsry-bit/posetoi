const Discord = require(`discord.js`);

module.exports.run = async(client, message, args) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setTitle('**Help Modération**')
    .setColor('#ff008a')
    .setDescription("**Modération:** :man_police_officer: \n ` .tempmute, .ban, .unban, .kick, .warn`");
    message.channel.send(exampleEmbed);

    message.delete();
};

module.exports.help = {
    name: "help-mod"
};