const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const bot = new Discord.Client();

client.commandes = new Discord.Collection();

fs.readdir("./Commandes/",(error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

    client.commandes.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/",(error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
    });
});


client.on('message', message =>{
    if(message.content === "Help"){
        message.send    
        const exampleEmbed = new Discord.MessageEmbed()
        .setDescription('Ma commande est .help ;) ')
        .setColor('#ffffff')
        message.channel.send(exampleEmbed);
        console.log('répond à hlp');

    }
});

client.on('message', message =>{
  if (message.content.startsWith("slt")){
      message.send    
      const exampleEmbed = new Discord.MessageEmbed()
      .setDescription('bien ou quoi ? ')
      .setColor('#ffffff')
      message.channel.send(exampleEmbed);
      console.log('répond à slt');

  }
});

client.on('message', message =>{
  if (message.content.startsWith("bien")){
      message.send    
      const exampleEmbed = new Discord.MessageEmbed()
      .setDescription('cool, tu vien au macdo cette aprem ? ')
      .setColor('#ffffff')
      message.channel.send(exampleEmbed);
      console.log('répond à bien');

  }
});

client.on('message', message =>{
  if (message.content.startsWith("non")){
      message.send    
      const exampleEmbed = new Discord.MessageEmbed()
      .setDescription('ah rip :skull_crossbones: ')
      .setColor('#ffffff')
      message.channel.send(exampleEmbed);
      console.log('répond à non');

  }
});

client.on('message', message =>{
  if (message.content.startsWith("https")) {
    if (message.deletable) message.delete();
      message.send    
      const exampleEmbed = new Discord.MessageEmbed()
      .setTitle(' :warning: __**Avertissement**__ :warning: ')
      .setDescription('les liens sont interdits ! ')
      .setColor('#ffffff')
      message.channel.send(exampleEmbed);
      console.log('répond à https');

  }
});

client.on('message', message =>{
  if (message.content.startsWith("www.")) {
    if (message.deletable) message.delete();
      message.send    
      const exampleEmbed = new Discord.MessageEmbed()
      .setTitle(' :warning: __**Avertissement**__ :warning: ')
      .setDescription('les liens sont interdits ! ')
      .setColor('#ffffff')
      message.channel.send(exampleEmbed);
      console.log('répond à www.');

  }
});



client.on("ready", () => {
  console.log(`Bot is ready`)
});


client.login(process.env.TOKEN);




