const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

const api = 'bgmyUCo5coj1GeAoq063lEOzAo9Iqpus';
const got = require('got');

client.login(config.token);

//Bot starts, command line
client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);
  //client.user.setGame(`#cmd`); //playing game
  client.user.setStatus("online"); // Set the bot's online/idle/dnd/invisible status
});

client.on("presenceUpdate", (oldMember, newMember) => {
    if(newMember.presence.game){
      let game = newMember.presence.game.name;

      if(`${game}` == "PLAYERUNKNOWN'S BATTLEGROUNDS" ){
        // if user dont have main role
        if(newMember.roles.find("name", "League of Legends") ||
          newMember.roles.find("name", "CS:GO") ||
          newMember.roles.find("name", "PUBG") ||
          newMember.roles.find("name", "Dota 2") ||
          newMember.roles.find("name", "Russian Fishing 4") ||
          newMember.roles.find("name", "Destiny 2") ||
          newMember.roles.find("name", "Apex Legends") ||
          newMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. pubg. new");
        }
        else{
          //console.log(newMember.user.username + " adding main role. pubg. new");
          //either main or secondary
          if(!newMember.roles.find("name", "PUBG")){
            newMember.addRole(newMember.guild.roles.find('name', 'PUBG'));
            console.log("- Role (PUBG) added to " + newMember.user.username);
          }

          // удалить начальную роль
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
            newMember.removeRole(newMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Destiny 2" ){
        // if user dont have main role
        if(newMember.roles.find("name", "PUBG") ||
          newMember.roles.find("name", "League of Legends") ||
          newMember.roles.find("name", "CS:GO") ||
          newMember.roles.find("name", "Destiny 2") ||
          newMember.roles.find("name", "Dota 2") ||
          newMember.roles.find("name", "Russian Fishing 4") ||
          newMember.roles.find("name", "Apex Legends") ||
          newMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. destiny 2. new");
        }
        else{
          //console.log(newMember.user.username + " adding main role. destiny 2. new");
          //either main or secondary
          if(!newMember.roles.find("name", "Destiny 2")){
            newMember.addRole(newMember.guild.roles.find('name', 'Destiny 2'));
            console.log("- Role (Destiny 2) added to " + newMember.user.username);
          }

          // удалить начальную роль
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
            newMember.removeRole(newMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "League of Legends" ){
        // if user dont have main role
        if(newMember.roles.find("name", "League of Legends") ||
          newMember.roles.find("name", "CS:GO") ||
          newMember.roles.find("name", "PUBG") ||
          newMember.roles.find("name", "Dota 2") ||
          newMember.roles.find("name", "Russian Fishing 4") ||
          newMember.roles.find("name", "Destiny 2") ||
          newMember.roles.find("name", "Apex Legends") ||
          newMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. pubg. new");
        }
        else{
          //console.log(newMember.user.username + " adding main role. pubg. new");
          //either main or secondary
          if(!newMember.roles.find("name", "League of Legends")){
            newMember.addRole(newMember.guild.roles.find('name', 'League of Legends'));
            console.log("- Role (League of Legends) added to " + newMember.user.username);
          }

          // удалить начальную роль
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
            newMember.removeRole(newMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Counter-Strike Global Offensive" ){
        // if user dont have main role
        if(newMember.roles.find("name", "League of Legends") ||
          newMember.roles.find("name", "CS:GO") ||
          newMember.roles.find("name", "PUBG") ||
          newMember.roles.find("name", "Dota 2") ||
          newMember.roles.find("name", "Russian Fishing 4") ||
          newMember.roles.find("name", "Destiny 2") ||
          newMember.roles.find("name", "Apex Legends") ||
          newMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. pubg. new");
        }
        else{
          //console.log(newMember.user.username + " adding main role. pubg. new");
          //either main or secondary
          if(!newMember.roles.find("name", "CS:GO")){
            newMember.addRole(newMember.guild.roles.find('name', 'CS:GO'));
            console.log("- Role (CS:GO) added to " + newMember.user.username);
          }

          // удалить начальную роль
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
            newMember.removeRole(newMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "DOTA 2" ){
        // if user dont have main role
        if(newMember.roles.find("name", "League of Legends") ||
          newMember.roles.find("name", "CS:GO") ||
          newMember.roles.find("name", "PUBG") ||
          newMember.roles.find("name", "Dota 2") ||
          newMember.roles.find("name", "Russian Fishing 4") ||
          newMember.roles.find("name", "Destiny 2") ||
          newMember.roles.find("name", "Apex Legends") ||
          newMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. pubg. new");
        }
        else{
          //console.log(newMember.user.username + " adding main role. pubg. new");
          //either main or secondary
          if(!newMember.roles.find("name", "Dota 2")){
            newMember.addRole(newMember.guild.roles.find('name', 'Dota 2'));
            console.log("- Role (Dota 2) added to " + newMember.user.username);
          }

          // удалить начальную роль
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
            newMember.removeRole(newMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Russian Fishing 4" ){
        // if user dont have main role
        if(newMember.roles.find("name", "League of Legends") ||
          newMember.roles.find("name", "CS:GO") ||
          newMember.roles.find("name", "PUBG") ||
          newMember.roles.find("name", "Dota 2") ||
          newMember.roles.find("name", "Russian Fishing 4") ||
          newMember.roles.find("name", "Destiny 2") ||
          newMember.roles.find("name", "Apex Legends") ||
          newMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. pubg. new");
        }
        else{
          //console.log(newMember.user.username + " adding main role. pubg. new");
          //either main or secondary
          if(!newMember.roles.find("name", "Russian Fishing 4")){
            newMember.addRole(newMember.guild.roles.find('name', 'Russian Fishing 4'));
            console.log("- Role (Russian Fishing 4) added to " + newMember.user.username);
          }

          // удалить начальную роль
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
            newMember.removeRole(newMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Overwatch" ){
        // if user dont have main role
        if(newMember.roles.find("name", "League of Legends") ||
          newMember.roles.find("name", "CS:GO") ||
          newMember.roles.find("name", "PUBG") ||
          newMember.roles.find("name", "Dota 2") ||
          newMember.roles.find("name", "Russian Fishing 4") ||
          newMember.roles.find("name", "Destiny 2") ||
          newMember.roles.find("name", "Apex Legends") ||
          newMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. pubg. new");
        }
        else{
          //console.log(newMember.user.username + " adding main role. pubg. new");
          //either main or secondary
          if(!newMember.roles.find("name", "Overwatch")){
            newMember.addRole(newMember.guild.roles.find('name', 'Overwatch'));
            console.log("- Role (Overwatch) added to " + newMember.user.username);
          }

          // удалить начальную роль
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
            newMember.removeRole(newMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Apex Legends" ){
        // if user dont have main role
        if(newMember.roles.find("name", "League of Legends") ||
          newMember.roles.find("name", "CS:GO") ||
          newMember.roles.find("name", "PUBG") ||
          newMember.roles.find("name", "Dota 2") ||
          newMember.roles.find("name", "Russian Fishing 4") ||
          newMember.roles.find("name", "Destiny 2") ||
          newMember.roles.find("name", "Apex Legends") ||
          newMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. pubg. new");
        }
        else{
          //console.log(newMember.user.username + " adding main role. pubg. new");
          //either main or secondary
          if(!newMember.roles.find("name", "Apex Legends")){
            newMember.addRole(newMember.guild.roles.find('name', 'Apex Legends'));
            console.log("- Role (Apex Legends) added to " + newMember.user.username);
          }

          // удалить начальную роль
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
            newMember.removeRole(newMember.guild.roles.find('name', 'User'));
          }
        }
      }
    }

    //OldMember-----------------------------------------------------------------

    if(oldMember.presence.game){
      let game = oldMember.presence.game.name;

      if(`${game}` == "PLAYERUNKNOWN'S BATTLEGROUNDS" ){
        // if user dont have main role
        if(oldMember.roles.find("name", "League of Legends") ||
          oldMember.roles.find("name", "CS:GO") ||
          oldMember.roles.find("name", "PUBG") ||
          oldMember.roles.find("name", "Dota 2") ||
          oldMember.roles.find("name", "Russian Fishing 4") ||
          oldMember.roles.find("name", "Destiny 2") ||
          oldMember.roles.find("name", "Apex Legends") ||
          oldMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. pubg. old");
        }
        else{
          //console.log(newMember.user.username + " adding main role. pubg. old");
          //either main or secondary
          if(!oldMember.roles.find("name", "PUBG")){
            oldMember.addRole(oldMember.guild.roles.find('name', 'PUBG'));
            console.log("- Role (PUBG) added to " + oldMember.user.username);
          }

          // удалить начальную роль
          if(oldMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
            oldMember.removeRole(oldMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Destiny 2" ){
        // if user dont have main role
        if(oldMember.roles.find("name", "PUBG") ||
          oldMember.roles.find("name", "League of Legends") ||
          oldMember.roles.find("name", "Destiny 2") ||
          oldMember.roles.find("name", "CS:GO") ||
          oldMember.roles.find("name", "Dota 2") ||
          oldMember.roles.find("name", "Russian Fishing 4") ||
          oldMember.roles.find("name", "Apex Legends") ||
          oldMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. destiny 2. old");
        }
        else{
          //console.log(newMember.user.username + " adding main role. destiny 2. ");
          //either main or secondary
          if(!oldMember.roles.find("name", "Destiny 2")){
            oldMember.addRole(oldMember.guild.roles.find('name', 'Destiny 2'));
            console.log("- Role (Destiny 2) added to " + oldMember.user.username);
          }

          // удалить начальную роль
          if(oldMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
            oldMember.removeRole(oldMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "League of Legends" ){
        // if user dont have main role
        if(oldMember.roles.find("name", "PUBG") ||
          oldMember.roles.find("name", "League of Legends") ||
          oldMember.roles.find("name", "Destiny 2") ||
          oldMember.roles.find("name", "CS:GO") ||
          oldMember.roles.find("name", "Dota 2") ||
          oldMember.roles.find("name", "Russian Fishing 4") ||
          oldMember.roles.find("name", "Apex Legends") ||
          oldMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. destiny 2. old");
        }
        else{
          //console.log(newMember.user.username + " adding main role. destiny 2. ");
          //either main or secondary
          if(!oldMember.roles.find("name", "League of Legends")){
            oldMember.addRole(oldMember.guild.roles.find('name', 'League of Legends'));
            console.log("- Role (League of Legends) added to " + oldMember.user.username);
          }

          // удалить начальную роль
          if(oldMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
            oldMember.removeRole(oldMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Counter-Strike Global Offensive" ){
        // if user dont have main role
        if(oldMember.roles.find("name", "PUBG") ||
          oldMember.roles.find("name", "League of Legends") ||
          oldMember.roles.find("name", "Destiny 2") ||
          oldMember.roles.find("name", "CS:GO") ||
          oldMember.roles.find("name", "Dota 2") ||
          oldMember.roles.find("name", "Russian Fishing 4") ||
          oldMember.roles.find("name", "Apex Legends") ||
          oldMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. destiny 2. old");
        }
        else{
          //console.log(newMember.user.username + " adding main role. destiny 2. ");
          //either main or secondary
          if(!oldMember.roles.find("name", "CS:GO")){
            oldMember.addRole(oldMember.guild.roles.find('name', 'CS:GO'));
            console.log("- Role (CS:GO) added to " + oldMember.user.username);
          }

          // удалить начальную роль
          if(oldMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
            oldMember.removeRole(oldMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "DOTA 2" ){
        // if user dont have main role
        if(oldMember.roles.find("name", "PUBG") ||
          oldMember.roles.find("name", "League of Legends") ||
          oldMember.roles.find("name", "Destiny 2") ||
          oldMember.roles.find("name", "CS:GO") ||
          oldMember.roles.find("name", "Dota 2") ||
          oldMember.roles.find("name", "Apex Legends") ||
          oldMember.roles.find("name", "Russian Fishing 4") ||
          oldMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. destiny 2. old");
        }
        else{
          //console.log(newMember.user.username + " adding main role. destiny 2. ");
          //either main or secondary
          if(!oldMember.roles.find("name", "Dota 2")){
            oldMember.addRole(oldMember.guild.roles.find('name', 'Dota 2'));
            console.log("- Role (Dota 2) added to " + oldMember.user.username);
          }

          // удалить начальную роль
          if(oldMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
            oldMember.removeRole(oldMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Russian Fishing 4" ){
        // if user dont have main role
        if(oldMember.roles.find("name", "PUBG") ||
          oldMember.roles.find("name", "League of Legends") ||
          oldMember.roles.find("name", "Destiny 2") ||
          oldMember.roles.find("name", "CS:GO") ||
          oldMember.roles.find("name", "Dota 2") ||
          oldMember.roles.find("name", "Russian Fishing 4") ||
          oldMember.roles.find("name", "Apex Legends") ||
          oldMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. destiny 2. old");
        }
        else{
          //console.log(newMember.user.username + " adding main role. destiny 2. ");
          //either main or secondary
          if(!oldMember.roles.find("name", "Russian Fishing 4")){
            oldMember.addRole(oldMember.guild.roles.find('name', 'Russian Fishing 4'));
            console.log("- Role (Russian Fishing 4) added to " + oldMember.user.username);
          }

          // удалить начальную роль
          if(oldMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
            oldMember.removeRole(oldMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Overwatch" ){
        // if user dont have main role
        if(oldMember.roles.find("name", "PUBG") ||
          oldMember.roles.find("name", "League of Legends") ||
          oldMember.roles.find("name", "Destiny 2") ||
          oldMember.roles.find("name", "CS:GO") ||
          oldMember.roles.find("name", "Dota 2") ||
          oldMember.roles.find("name", "Russian Fishing 4") ||
          oldMember.roles.find("name", "Apex Legends") ||
          oldMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. destiny 2. old");
        }
        else{
          //console.log(newMember.user.username + " adding main role. destiny 2. ");
          //either main or secondary
          if(!oldMember.roles.find("name", "Overwatch")){
            oldMember.addRole(oldMember.guild.roles.find('name', 'Overwatch'));
            console.log("- Role (Overwatch) added to " + oldMember.user.username);
          }

          // удалить начальную роль
          if(oldMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
            oldMember.removeRole(oldMember.guild.roles.find('name', 'User'));
          }
        }
      }

      if(`${game}` == "Apex Legends" ){
        // if user dont have main role
        if(oldMember.roles.find("name", "PUBG") ||
          oldMember.roles.find("name", "League of Legends") ||
          oldMember.roles.find("name", "Destiny 2") ||
          oldMember.roles.find("name", "CS:GO") ||
          oldMember.roles.find("name", "Dota 2") ||
          oldMember.roles.find("name", "Russian Fishing 4") ||
          oldMember.roles.find("name", "Apex Legends") ||
          oldMember.roles.find("name", "Overwatch")){
            //console.log(newMember.user.username + " already has main role. Apex Legends. old");
        }
        else{
          //console.log(newMember.user.username + " adding main role. Apex Legends. ");
          //either main or secondary
          if(!oldMember.roles.find("name", "Apex Legends")){
            oldMember.addRole(oldMember.guild.roles.find('name', 'Apex Legends'));
            console.log("- Role (Apex Legends) added to " + oldMember.user.username);
          }

          // удалить начальную роль
          if(oldMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
            oldMember.removeRole(oldMember.guild.roles.find('name', 'User'));
          }
        }
      }
    }
});

//Приветствие и выдача начальной роли
client.on('guildMemberAdd', member => {

  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'основной');
  console.log(`- ${member.user.username} joined GLHF`);
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;

  // Приветствие (работает)
  var number = Math.floor(Math.random() * 11) + 1;
  if(number == 1){ channel.send(`Где же ${member} На сервере!`); }
  if(number == 2){ channel.send(`${member} пришел. Вечеринка окончена.`); }
  if(number == 3){ channel.send(`Добро пожаловать, ${member}. Мы ждали тебя ( ͡° ͜ʖ ͡°)`); }
  if(number == 4){ channel.send(`Привет, а не ${member} ли вы ищете?`); }
  if(number == 5){ channel.send(`${member} показался. Подержите мое пиво.`); }
  if(number == 6){ channel.send(`Это ${member} Восславь солнце!`); }
  if(number == 7){ channel.send(`${member} просочился на сервер.`); }
  if(number == 8){ channel.send(`Это птица! Это самолет! Неважно, это просто ${member}.`); }
  if(number == 9){ channel.send(`Вызов брошен - ${member} явился!`); }
  if(number == 10){ channel.send(`Держитесь. ${member} только что зашёл на сервер.`); }
  if(number == 11){ channel.send(`${member} только что подключился. Все сделайте вид, что заняты!`); }

  // Начальная роль
  var role = member.guild.roles.find('name', 'User');
  member.addRole(role);

  //join-left channel
  const welcomechannel = member.guild.channels.find('name', 'join-left')
  //const member2 = message.guild.member(member.user);
  var userCreated = member.user.createdAt.toString().split(' ');
  var userJoined = member.joinedAt.toString().split(' ');

  var newuserjoinembed = new Discord.RichEmbed()
    .setColor('00FF00')
    .setAuthor(member.user.tag + ' присоединился', member.user.displayAvatarURL)
    .addField("Зарегистрировался", userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3], true)
    .addField("Присоединился:", userJoined[1] + ' ' + userJoined[2] + ', ' + userJoined[3], true)
    .setTimestamp()
    return welcomechannel.send(newuserjoinembed);
});

client.on('guildMemberRemove', member => {
    console.log(`- ${member.user.username} left GLHF`);

    //join-left channel
    const goodbyechannel = member.guild.channels.find('name', 'join-left')
    //const member2 = message.guild.member(member.user);
    var userCreated = member.user.createdAt.toString().split(' ');
    var userJoined = member.joinedAt.toString().split(' ');

    var newuserjoinembed = new Discord.RichEmbed()
      .setColor('#FF0000')
      .setAuthor(member.user.tag + ' покинул сервер', member.user.displayAvatarURL)
      .addField("Зарегистрировался", userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3], true)
      .addField("Присоединился:", userJoined[1] + ' ' + userJoined[2] + ', ' + userJoined[3], true)
      .addField("Покинул", new Date().toLocaleString(), true)
      .setTimestamp()
      return goodbyechannel.send(newuserjoinembed);
});

client.on("message", async message => {
  if(message.author.bot) return;
  //if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Удалять все сообщения из pubg_top 1, если они не скриншоты
  if(message.channel.name === "top1"){
    var mod = message.member.guild.roles.find('name', 'GL HF team');
    if(!message.member.roles.has(mod.id)) {
      if(message.attachments.array().length > 0){
        //console.log("- " + message.author.username + " posted a screenshot in #pubg_top1.");
      }
      else{
        message.delete();
        console.log("- " + message.author.username + " posted not screenshot in #top1.");
        message.author.send('Пожалуйста отправляйте только скриншоты с топ 1 в канале **#top1**, для всего остального есть **#основной** канал.'
          , {files: ["https://cdn.discordapp.com/attachments/250739232664977408/448035891257278471/glhf_menu.jpg"]});
      }
    }
    else{
      console.log("- ADMIN " + message.author.username + " posted something in #top1.");
    }
  }

  //Проверка пинга
  if(command === "ping") {
    console.log("- Command Ping were used by " + message.author.username);
    const m = await message.channel.send("Ping?");
    let E = new Discord.RichEmbed() // Start of embed
    .setTitle("Pong! :stopwatch:") // Embed Title
    .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`) // Shows Latency
    .addField("API Latency", `${Math.round(client.ping)}ms`) // Shows API Latency

    message.channel.send(E) // Sending the embed
  }

  //Посмотреть всех с ролью
  if(command === "game") {
    console.log("- Command Game were used by " + message.author.username);
    let role = message.mentions.roles.first();

    const ListEmbed = new Discord.RichEmbed()
    .setColor(role.hexColor)
    .setTitle('У этих людей есть '+ role.name +'.')
    .setDescription(role.members.map(m=>m.user).join('\n'));
    message.channel.send(ListEmbed);
  }

  //Статистика, кто сколько онлайн/Нет на месте и т.д.
  /*
  if(command === "member") {
    const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
		.addField('Пользователей', `**${message.guild.memberCount}**`, true)
		.addField('Люди', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Бот', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
		.addField('Статус', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** В сети\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Нет на месте\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Не беспокоить\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Не в сети\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Стримят`)
	  message.channel.send(embed);
  }
  */

  //Информация об участники
  if(command === "user") {
    console.log("- Command Info were used by " + message.author.username);
    let user = message.mentions.users.first();
    const member = message.guild.member(user);
    var userCreated = user.createdAt.toString().split(' ');
    var userJoined = member.joinedAt.toString().split(' ');
    if(user.lastMessage == null){
      var lastMsg2 = "Никогда";
    }
    else{
      var lastMsg = user.lastMessage.createdAt.toString().split(' ');
      var lastMsg2 = lastMsg[1] + ' ' + lastMsg[2] + ', ' + lastMsg[3];
    }

    if(user.presence.status == "online"){
      var status = "В сети";
    }
    else if(user.presence.status == "offline"){
      var status = "Не в сети";
    }
    else if(user.presence.status == "idle"){
      var status = "Нет на месте";
    }
    else if(user.presence.status == "dnd"){
      var status = "Не беспокоить";
    }

    if(message.guild.owner.user.tag == user.tag){
      var role = "Владелец сервера :crown:";
    }
    else if(member.highestRole.name == "Admin"){
      var role = "Администратор :closed_book:";
    }
    else if(member.highestRole.name == "GL HF team"){
      var role = "Модератор :green_book:";
    }
    else{
      var role = member.highestRole;

    }

    //.setFooter(`Owner: ${message.guild.owner.user.tag}`)

    const embed = new Discord.RichEmbed()
    //.setTitle(`${user.username}#${user.discriminator}`)
    .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL)
    .setColor(0x3498db)
    //.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
    //.setFooter("ID: " + user.id)
    .setThumbnail(user.displayAvatarURL)
    .setTimestamp() // Takes a Date object, defaults to current date.
    .addField("Статус", status, true)
    //.addField("Присоединился:", user.createdAt, true)
    .addField("Присоединился:", userJoined[1] + ' ' + userJoined[2] + ', ' + userJoined[3], true)
    .addField("Последнее сообщение", lastMsg2, true)
    .addField("Зарегистрировался", userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3], true)
    .addField("Самая высокая роль", role, true)
    //.addField("Номер", role, true)
    .addField("Роли:", member.roles.map(roles => `${roles}`).join(', '), true);
    message.channel.send({embed});
  }

  //Список комманд
  if(command === "cmd") {
    // console.log("- Command Cmd were used by " + message.author.username);
    // const embed = new Discord.RichEmbed()
    // .setAuthor("Commands", "https://cdn.discordapp.com/attachments/472370247173931032/472370632873476107/logo_new_style23_without_bg.png")
    // .setColor(0x3498db)
    // .setFooter("GL HF", "https://cdn.discordapp.com/attachments/472370247173931032/472370632873476107/logo_new_style23_without_bg.png")
    // .setTimestamp()
    // .addField("#add @<роль>", "Добавить роль.")
    // .addField("#remove @<роль>", "Удалить роль.")
    // .addField("#user @<ник>", "Информация об участники.")
    // .addField("#gif <о чем гифка>", "Найти гифку.");
    // message.author.send({embed});
    // //message.channel.send({embed});
    //
    // if(message.member.roles.some(r=>["Admin", "GL HF team"].includes(r.name)) ){
    //   const embed = new Discord.RichEmbed()
    //   .setTitle("__**Команды администратора.**__")
    //   //.setAuthor("Commands", "https://cdn.discordapp.com/attachments/472370247173931032/472370632873476107/logo_new_style23_without_bg.png")
    //   .setColor(0x3cb581)
    //   .setFooter("GL HF", "https://cdn.discordapp.com/attachments/472370247173931032/472370632873476107/logo_new_style23_without_bg.png")
    //   .setTimestamp()
    //   .addField("#say <сообщение>", "Сказать что то от имени бота.")
    //   .addField("#purge <количество сообщений>", "Удалить определённое количество сообщений.")
    //   .addField("#play <названия песни или ссылка>", "Включить музыку.")
    //   .addField("#skip", "Пропустить песню.")
    //   .addField("#stop", "Остановить музыку.")
    //   .addField("#warn @<ник> <причина>", "Предупреждать участника.")
    //   .addField("#warnings @<ник>", "Посмотреть сколько предупреждений у участника.")
    //   .addField("#kick @<ник> <причина>", "Выгнать")
    //   .addField("#softban @<ник> <причина>", "Забанить и сразу же разбанить")
    //   .addField("#ban @<ник> <время (мин)> <причина>", "Забанить")
    //   .addField("#unban @<ник> <причина>", "Разбанить")
    //   .addField("#member", "Показать сколько людей на сервере.");
    //   //message.channel.send({embed});
    //   message.author.send({embed});
    // }
  }

  //Сказать что то от имени бота
  if(command === "say") {
    if(!message.member.roles.some(r=>["Admin", "GL HF team"].includes(r.name)) ){
      return message.reply("У вас нет прав для этого действия.");
    }
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
    console.log("- Command Say were used by " + message.author.username);
  }

  //Удалить определённое количество сообщений
  if(command === "purge") {
    console.log("- Command Purge were used by " + message.author.username);
    if(!message.member.roles.some(r=>["Admin", "GL HF team"].includes(r.name)) ){
      return message.reply("У вас нет прав для этого действия.");
    }
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Укажите количество удаляемых сообщений от 2 до 100.");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Не удалось удалить сообщения из-за: ${error}`));
  }

  //Выбрать роль при помощи эмоджи
  if(command === "add_remove_role") {
    console.log("- Command choose_main_role were used by " + message.author.username);

    let pubg_emoji = message.guild.emojis.find('name', "pubg2");
    let csgo_emoji = message.guild.emojis.find('name', "cs");
    let lol_emoji = message.guild.emojis.find('name', "lol");
    let dota_emoji = message.guild.emojis.find('name', "dota2");
    let rf4_emoji = message.guild.emojis.find('name', "rf4");
    let destiny_emoji = message.guild.emojis.find('name', "destiny");
    let ow_emoji = message.guild.emojis.find('name', "ow");
    let apex_emoji = message.guild.emojis.find('name', "apex");

    const embed = new Discord.RichEmbed()
    .setAuthor("Добавление/Удаление ролей сервера")
    .setColor(0x3498db)
    .setDescription("Нажми на эмоджи, что бы получить соответствующую роль. При необходимости удалить роль, нажми на эмоджи еще раз.")
    .addField("Роли:", pubg_emoji + " - " + message.guild.roles.find(role => role.name === "PUBG") + "\n"
                     + csgo_emoji + " - " + message.guild.roles.find(role => role.name === "CS:GO") + "\n"
                     + lol_emoji + " - " + message.guild.roles.find(role => role.name === "League of Legends") + "\n"
                     + dota_emoji + " - " + message.guild.roles.find(role => role.name === "Dota 2") + "", true)
    .addField("*", rf4_emoji + " - " + message.guild.roles.find(role => role.name === "Russian Fishing 4") + "\n"
                     + destiny_emoji + " - " + message.guild.roles.find(role => role.name === "Destiny 2") + "\n"
                     + ow_emoji + " - " + message.guild.roles.find(role => role.name === "Overwatch") + "\n"
                     + apex_emoji + " - " + message.guild.roles.find(role => role.name === "Apex Legends"), true)

    message.delete().catch(O_o=>{});
    message.channel.send(embed).then(async function (msg) {
      await msg.react(pubg_emoji) //PUBG
      await msg.react(csgo_emoji) //CS:GO
      await msg.react(lol_emoji) //League of legends
      await msg.react(dota_emoji) //Dota 2
      await msg.react(rf4_emoji) //Russian fishing 4
      await msg.react(destiny_emoji) //Destiny 2
      await msg.react(ow_emoji) //Overwatch
      await msg.react(apex_emoji) //Apex Legends
    });
  }
});

client.on('messageReactionAdd', (reaction, user) => {});
client.on('messageReactionRemove', (reaction, user) => {});

//Function to generate the role messages, based on your settings
function generateMessages(){
  var messages = [];
  messages.push(initialMessage);
  for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
  return messages;
}

client.on('raw', async event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);

        if (msg.author.id == client.user.id && channel.name === "welcome"){
            //var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            //var role = msg.content.match(re)[1];
            const emoji = event.d.emoji.id ? `${event.d.emoji.name}:${event.d.emoji.id}` : event.d.emoji.name;
            var emoji_name = emoji.split(':')[0];

            const reaction = msg.reactions.get(emoji);
            if (reaction) reaction.users.set(event.d.user_id, client.users.get(event.d.user_id));


            if (user.id != client.user.id){
                //var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);

                if (event.t === "MESSAGE_REACTION_ADD"){
                  if (reaction.emoji.name == 'pubg2'){
                    console.log("- "+ memberObj.user.username + " added role (PUBG) by emoji.");
                    memberObj.addRole(memberObj.guild.roles.find('name', 'PUBG'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'CS:GO'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'League of Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Dota 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Overwatch'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                  }
                  else if (reaction.emoji.name == 'cs'){
                    console.log("- "+ memberObj.user.username + " added role (CS:GO) by emoji.");
                    memberObj.addRole(memberObj.guild.roles.find('name', 'CS:GO'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'PUBG'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'League of Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Dota 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Overwatch'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                  }
                  else if (reaction.emoji.name == 'lol'){
                    console.log("- "+ memberObj.user.username + " added role (League of Legends) by emoji.");
                    memberObj.addRole(memberObj.guild.roles.find('name', 'League of Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'PUBG'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'CS:GO'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Dota 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Overwatch'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                  }
                  else if (reaction.emoji.name == 'dota2'){
                    console.log("- "+ memberObj.user.username + " added role (Dota 2) by emoji.");
                    memberObj.addRole(memberObj.guild.roles.find('name', 'Dota 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'PUBG'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'CS:GO'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'League of Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Overwatch'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                  }
                  else if (reaction.emoji.name == 'rf4'){
                    console.log("- "+ memberObj.user.username + " added role (Russian Fishing 4) by emoji.");
                    memberObj.addRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'PUBG'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'CS:GO'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'League of Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Dota 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Overwatch'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                  }
                  else if (reaction.emoji.name == 'destiny'){
                    console.log("- "+ memberObj.user.username + " added role (Destiny 2) by emoji.");
                    memberObj.addRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'PUBG'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'CS:GO'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'League of Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Dota 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Overwatch'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                  }
                  else if (reaction.emoji.name == 'ow'){
                    console.log("- "+ memberObj.user.username + " added role (Overwatch) by emoji.");
                    memberObj.addRole(memberObj.guild.roles.find('name', 'Overwatch'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'PUBG'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'CS:GO'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'League of Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Dota 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                  }
                  else if (reaction.emoji.name == 'apex'){
                    console.log("- "+ memberObj.user.username + " added role (Apex Legends) by emoji.");
                    memberObj.addRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'PUBG'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'CS:GO'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'League of Legends'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Dota 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                    // memberObj.removeRole(memberObj.guild.roles.find('name', 'Overwatch'));
                  }

                } else if (event.t === "MESSAGE_REACTION_REMOVE") {
                  //console.log(emoji_name);
                  if (emoji_name == 'pubg2'){
                    console.log("- "+ memberObj.user.username + " removed role (PUBG) by emoji.");
                    memberObj.removeRole(memberObj.guild.roles.find('name', 'PUBG'));
                  }
                  else if (emoji_name == 'cs'){
                    console.log("- "+ memberObj.user.username + " removed role (CS:GO) by emoji.");
                    memberObj.removeRole(memberObj.guild.roles.find('name', 'CS:GO'));
                  }
                  else if (emoji_name == 'lol'){
                    console.log("- "+ memberObj.user.username + " removed role (League of Legends) by emoji.");
                    memberObj.removeRole(memberObj.guild.roles.find('name', 'League of Legends'));
                  }
                  else if (emoji_name == 'dota2'){
                    console.log("- "+ memberObj.user.username + " removed role (Dota 2) by emoji.");
                    memberObj.removeRole(memberObj.guild.roles.find('name', 'Dota 2'));
                  }
                  else if (emoji_name == 'rf4'){
                    console.log("- "+ memberObj.user.username + " removed role (Russian Fishing 4) by emoji.");
                    memberObj.removeRole(memberObj.guild.roles.find('name', 'Russian Fishing 4'));
                  }
                  else if (emoji_name == 'destiny'){
                    console.log("- "+ memberObj.user.username + " removed role (Destiny 2) by emoji.");
                    memberObj.removeRole(memberObj.guild.roles.find('name', 'Destiny 2'));
                  }
                  else if (emoji_name == 'ow'){
                    console.log("- "+ memberObj.user.username + " removed role (Overwatch) by emoji.");
                    memberObj.removeRole(memberObj.guild.roles.find('name', 'Overwatch'));
                  }
                  else if (emoji_name == 'apex'){
                    console.log("- "+ memberObj.user.username + " removed role (Apex Legends) by emoji.");
                    memberObj.removeRole(memberObj.guild.roles.find('name', 'Apex Legends'));
                  }
                }
            }
        }
        })
    }
});
