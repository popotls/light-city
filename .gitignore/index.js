const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Commande: *help");
    console.log("Connectedç");
});

bot.login("NzMzODQ4MDAzNTQ2MzE2ODcw.XxKyLg.YkWBO1WH3n6BQuCTrb1OWo7DcFw");


bot.on('message'), message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué")
    }
});
