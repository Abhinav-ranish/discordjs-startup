const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("BLAZE ROCKS prefix ?!", {
  type: "STREAMING",
  url: "https://www.twitch.com/monstercat"
});


client.on('message', (msg) => {
  if (msg.content === '/ping') {
    msg.reply('pong');
  }
});

client.login(token);
