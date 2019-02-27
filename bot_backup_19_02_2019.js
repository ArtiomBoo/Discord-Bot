const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

const api = 'bgmyUCo5coj1GeAoq063lEOzAo9Iqpus';
const got = require('got');

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
  if(message.channel.name === "pubg_top1"){
    var mod = message.member.guild.roles.find('name', 'GL HF team');
    if(!message.member.roles.has(mod.id)) {
      if(message.attachments.array().length > 0){
        //console.log("- " + message.author.username + " posted a screenshot in #pubg_top1.");
      }
      else{
        message.delete();
        console.log("- " + message.author.username + " posted not screenshot in #pubg_top1.");
        message.author.send('Пожалуйста отправляйте только скриншоты с топ 1 в канале **#pubg_top1**, для всего остального есть **#основной** канал.'
          , {files: ["https://cdn.discordapp.com/attachments/250739232664977408/448035891257278471/glhf_menu.jpg"]});
      }
    }
    else{
      console.log("- ADMIN " + message.author.username + " posted something in #pubg_top1.");
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
  /*
  if(command === "game") {
    console.log("- Command Game were used by " + message.author.username);
    let role = message.mentions.roles.first();

    const ListEmbed = new Discord.RichEmbed()
    .setColor(role.hexColor)
    .setTitle('У этих людей есть '+ role.name +'.')
    .setDescription(role.members.map(m=>m.user).join('\n'));
    message.channel.send(ListEmbed);
  }
  */

  //Посмотреть всех с ролью онлайн
  /*
  if(command === "game_online") {
    console.log("- Command Game were used by " + message.author.username);
    let role = message.mentions.roles.first();

    const ListEmbed = new Discord.RichEmbed()
    .setColor(role.hexColor)
    .setTimestamp() // Takes a Date object, defaults to current date.
    .setFooter(role.name)
    .setTitle('Люди которые имеют '+ role.name + ' и сейчас в сети.')
    .setDescription(role.members.user.filter(o => o.presence.status === 'online').join('\n'))
    .addField('В сети', `${role.members.filter(o => o.presence.status === 'online').size}\n`);
    message.channel.send(ListEmbed);
  }
  */

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
    console.log("- Command Cmd were used by " + message.author.username);
    const embed = new Discord.RichEmbed()
    .setAuthor("Commands", "https://cdn.discordapp.com/attachments/472370247173931032/472370632873476107/logo_new_style23_without_bg.png")
    .setColor(0x3498db)
    .setFooter("GL HF", "https://cdn.discordapp.com/attachments/472370247173931032/472370632873476107/logo_new_style23_without_bg.png")
    .setTimestamp()
    .addField("#add @<роль>", "Добавить роль.")
    .addField("#remove @<роль>", "Удалить роль.")
    .addField("#user @<ник>", "Информация об участники.")
    .addField("#gif <о чем гифка>", "Найти гифку.");
    message.author.send({embed});
    //message.channel.send({embed});

    if(message.member.roles.some(r=>["Admin", "GL HF team"].includes(r.name)) ){
      const embed = new Discord.RichEmbed()
      .setTitle("__**Команды администратора.**__")
      //.setAuthor("Commands", "https://cdn.discordapp.com/attachments/472370247173931032/472370632873476107/logo_new_style23_without_bg.png")
      .setColor(0x3cb581)
      .setFooter("GL HF", "https://cdn.discordapp.com/attachments/472370247173931032/472370632873476107/logo_new_style23_without_bg.png")
      .setTimestamp()
      .addField("#say <сообщение>", "Сказать что то от имени бота.")
      .addField("#purge <количество сообщений>", "Удалить определённое количество сообщений.")
      .addField("#play <названия песни или ссылка>", "Включить музыку.")
      .addField("#skip", "Пропустить песню.")
      .addField("#stop", "Остановить музыку.")
      .addField("#warn @<ник> <причина>", "Предупреждать участника.")
      .addField("#warnings @<ник>", "Посмотреть сколько предупреждений у участника.")
      .addField("#kick @<ник> <причина>", "Выгнать")
      .addField("#softban @<ник> <причина>", "Забанить и сразу же разбанить")
      .addField("#ban @<ник> <время (мин)> <причина>", "Забанить")
      .addField("#unban @<ник> <причина>", "Разбанить")
      .addField("#member", "Показать сколько людей на сервере.");
      //message.channel.send({embed});
      message.author.send({embed});
    }
  }

  //Поиск гифок
  /*
  if(command === "gif") {
    console.log("- " + message.author.username + " used gif command.");
    if(args.length < 1) return message.channel.send("Необходимо написать о чем гифка. К примеру #gif pubg");
    const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, {json: true})
    if(!res || !res.body || !res.body.data) return message.channel.send("Не получилось найти подходящею гифку.")
    const embed = new Discord.RichEmbed()
    .setColor(0x3498db)
    .setImage(res.body.data.image_url)
    message.channel.send({embed: embed});
  }
  */

  //main (colour) Role
  if(command === "main") {
    let userToModify = message.member;
    //let role = message.mentions.roles.first();
    let role = args[0];

    if(role == "pubg"){ //add pubg
      userToModify.addRole(userToModify.guild.roles.get("396304037026332684")); //pubg
      userToModify.removeRole(userToModify.guild.roles.get("396304077232799747")); //lol_role
      userToModify.removeRole(userToModify.guild.roles.get("420569062041452544")); //cs:go
      userToModify.removeRole(userToModify.guild.roles.get("442645093690769408")); //dota 2
      userToModify.removeRole(userToModify.guild.roles.get("472134258639765504")); //russian Fishing 4
      userToModify.removeRole(userToModify.guild.roles.get("396304131708682240")); //destiny 2
      userToModify.removeRole(userToModify.guild.roles.get("396307018698326027")); //overwatch

      console.log("- " + message.author.username + " changed main role PUBG to himself.");
      message.author.send("Вы успешно изменили основную роль на '__*PUBG*__'.");
    }
    else if(role == "lol"){ //add league of legends
      userToModify.addRole(userToModify.guild.roles.get("396304077232799747")); //league of legends
      userToModify.removeRole(userToModify.guild.roles.get("396304037026332684")); //pubg
      userToModify.removeRole(userToModify.guild.roles.get("420569062041452544")); //cs:go
      userToModify.removeRole(userToModify.guild.roles.get("442645093690769408")); //dota 2
      userToModify.removeRole(userToModify.guild.roles.get("472134258639765504")); //russian Fishing 4
      userToModify.removeRole(userToModify.guild.roles.get("396304131708682240")); //destiny 2
      userToModify.removeRole(userToModify.guild.roles.get("396307018698326027")); //overwatch

      console.log("- " + message.author.username + " changed main role League of Legends to himself.");
      message.author.send("Вы успешно изменили свою основную роль на '__*League of Legends*__'.");
    }
    else if(role == "csgo"){ //add cs:go
      userToModify.addRole(userToModify.guild.roles.get("420569062041452544")); //cs:go
      userToModify.removeRole(userToModify.guild.roles.get("396304037026332684")); //pubg
      userToModify.removeRole(userToModify.guild.roles.get("396304077232799747")); //lol_role
      userToModify.removeRole(userToModify.guild.roles.get("442645093690769408")); //dota 2
      userToModify.removeRole(userToModify.guild.roles.get("472134258639765504")); //russian Fishing 4
      userToModify.removeRole(userToModify.guild.roles.get("396304131708682240")); //destiny 2
      userToModify.removeRole(userToModify.guild.roles.get("396307018698326027")); //overwatch

      console.log("- " + message.author.username + " changed main role CS:GO to himself.");
      message.author.send("Вы успешно изменили свою основную роль на '__*CS:GO*__'.");
    }
    else if(role == "dota"){ //add dota 2
      userToModify.addRole(userToModify.guild.roles.get("442645093690769408")); //dota 2
      userToModify.removeRole(userToModify.guild.roles.get("396304037026332684")); //pubg
      userToModify.removeRole(userToModify.guild.roles.get("396304077232799747")); //lol_role
      userToModify.removeRole(userToModify.guild.roles.get("420569062041452544")); //cs:go
      userToModify.removeRole(userToModify.guild.roles.get("472134258639765504")); //russian Fishing 4
      userToModify.removeRole(userToModify.guild.roles.get("396304131708682240")); //destiny 2
      userToModify.removeRole(userToModify.guild.roles.get("396307018698326027")); //overwatch

      console.log("- " + message.author.username + " changed main role Dota 2 to himself.");
      message.author.send("Вы успешно изменили свою основную роль на '__*Dota 2*__'.");
    }
    else if(role == "rf"){ //add russian fishing
      userToModify.addRole(userToModify.guild.roles.get("472134258639765504")); //russian fishing
      userToModify.removeRole(userToModify.guild.roles.get("396304037026332684")); //pubg
      userToModify.removeRole(userToModify.guild.roles.get("396304077232799747")); //lol_role
      userToModify.removeRole(userToModify.guild.roles.get("420569062041452544")); //cs:go
      userToModify.removeRole(userToModify.guild.roles.get("442645093690769408")); //dota 2
      userToModify.removeRole(userToModify.guild.roles.get("396304131708682240")); //destiny 2
      userToModify.removeRole(userToModify.guild.roles.get("396307018698326027")); //overwatch

      console.log("- " + message.author.username + " changed main role Russian Fishing 4 to himself.");
      message.author.send("Вы успешно изменили свою основную роль на '__*Russian Fishing 4*__'.");
    }
    else if(role == "destiny"){ //add destiny 2
      userToModify.addRole(userToModify.guild.roles.get("396304131708682240")); //destiny 2
      userToModify.removeRole(userToModify.guild.roles.get("396304037026332684")); //pubg
      userToModify.removeRole(userToModify.guild.roles.get("396304077232799747")); //lol_role
      userToModify.removeRole(userToModify.guild.roles.get("420569062041452544")); //cs:go
      userToModify.removeRole(userToModify.guild.roles.get("442645093690769408")); //dota 2
      userToModify.removeRole(userToModify.guild.roles.get("472134258639765504")); //russian Fishing 4
      userToModify.removeRole(userToModify.guild.roles.get("396307018698326027")); //overwatch

      console.log("- " + message.author.username + " changed main role Destiny 2 to himself.");
      message.author.send("Вы успешно изменили свою основную роль на '__*Destiny 2*__'.");
    }
    else if(role == "ow"){ //add overwatch
      userToModify.addRole(userToModify.guild.roles.get("396307018698326027")); //overwatch
      userToModify.removeRole(userToModify.guild.roles.get("396304037026332684")); //pubg
      userToModify.removeRole(userToModify.guild.roles.get("396304077232799747")); //lol_role
      userToModify.removeRole(userToModify.guild.roles.get("420569062041452544")); //cs:go
      userToModify.removeRole(userToModify.guild.roles.get("442645093690769408")); //dota 2
      userToModify.removeRole(userToModify.guild.roles.get("472134258639765504")); //russian Fishing 4
      userToModify.removeRole(userToModify.guild.roles.get("396304131708682240")); //destiny 2

      console.log("- " + message.author.username + " changed main role Overwatch to himself.");
      message.author.send("Вы успешно изменили свою основную роль на '__*Overwatch*__'.");
    }
    else{
      message.author.send("Произошла ошибка, либо роль '__*" + role + "*__' не существует либо у вас нет прав добавить эту роль.");
    }

    // удалить начальную роль
    var role_user = userToModify.guild.roles.find('name', 'User');
    if(userToModify.roles.find("name", "User")){
      console.log("- Role (user) removed from " + userToModify.user.username);
      userToModify.removeRole(role_user);
    }
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
});

client.login(config.token);
