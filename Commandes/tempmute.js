const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    message.delete()
    if(message.author.bot) return;
    if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply(" Je n'ai pas la permission `Gérer les rôles` pour effectuer cette action")
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send("Désolé mais tu n'as pas la permission :( ");
    
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Je ne trouve pas l'utilisateur");
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Je ne peux pas le mute.");
    let muterole = message.guild.roles.find(`name`, "mute");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "mute",
          color: "#ff008a",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    let mutetime = args[1];
    if(!mutetime) return message.reply("Tu n'as pas spécifié de temps.");
  
    await(tomute.addRole(muterole.id));
    message.reply(` | <@${tomute.id}> a été mute pour ${ms(ms(mutetime))}`);
  
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> a été unmute !`);
    }, ms(mutetime));
  }
  
  module.exports.help = {
    name: "tempmute",
    description: "Rend muet un utilisateur durant un certain temps",
    usage: "==tempmute <@mention> <temps>\n==tmute <@mention> <temps>",
    aliases: "tmute",
  }