const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

//Bot starts, command line
client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);
  client.user.setGame(`Добро пожаловать!`); //playing game
  client.user.setStatus("online"); // Set the bot's online/idle/dnd/invisible status
});

client.on("presenceUpdate", (oldMember, newMember) => {
    if(newMember.presence.game){
      let game = newMember.presence.game.name;

      if(`${game}` == "PLAYERUNKNOWN'S BATTLEGROUNDS" ){
        var role = newMember.guild.roles.find('name', 'PUBG');
        if(!newMember.roles.find("name", "PUBG")){
          newMember.addRole(role);
          console.log("- Role (PUBG) added to " + newMember.user.username);
          // удалить начальную роль
          var role_user = newMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
  		      newMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "League of Legends"){
        var role = newMember.guild.roles.find('name', 'League of Legends');
        if(!newMember.roles.find("name", "League of Legends")){
          newMember.addRole(role);
          console.log("- Role (League of Legends) added to " + newMember.user.username);
          // удалить начальную роль
          var role_user = newMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
  		      newMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "DOTA 2"){
        var role = newMember.guild.roles.find('name', 'Dota 2');
        if(!newMember.roles.find("name", "Dota 2")){
          newMember.addRole(role);
          console.log("- Role (Dota 2) added to " + newMember.user.username);
          // удалить начальную роль
          var role_user = newMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
  		      newMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "Overwatch"){
        var role = newMember.guild.roles.find('name', 'Overwatch');
        if(!newMember.roles.find("name", "Overwatch")){
          newMember.addRole(role);
          console.log("- Role (Overwatch) added to " + newMember.user.username);
          // удалить начальную роль
          var role_user = newMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
  		      newMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "Destiny 2"){
        var role = newMember.guild.roles.find('name', 'Destiny 2');
        if(!newMember.roles.find("name", "Destiny 2")){
          newMember.addRole(role);
          console.log("- Role (Destiny 2) added to " + newMember.user.username);
          // удалить начальную роль
          var role_user = newMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
  		      newMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "Counter-Strike Global Offensive"){
        var role = newMember.guild.roles.find('name', 'CS:GO');
        if(!newMember.roles.find("name", "CS:GO")){
          newMember.addRole(role);
          console.log("- Role (CS:GO) added to " + newMember.user.username);
          // удалить начальную роль
          var role_user = newMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + newMember.user.username);
  		      newMember.removeRole(role_user);
          }
        }
      }
    }

    //OldMember-----------------------------------------------------------------

    if(oldMember.presence.game){
      let game = oldMember.presence.game.name;
      //console.log(`playing: ${game}.`);
      if(`${game}` == "PLAYERUNKNOWN'S BATTLEGROUNDS"){
        var role = oldMember.guild.roles.find('name', 'PUBG');
        if(!oldMember.roles.find("name", "PUBG")){
          oldMember.addRole(role);
          console.log("- Role (PUBG) added to " + oldMember.user.username);
          // удалить начальную роль
          var role_user = oldMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
  		      oldMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "League of Legends"){
        var role = oldMember.guild.roles.find('name', 'League of Legends');
        if(!oldMember.roles.find("name", "League of Legends")){
          oldMember.addRole(role);
          console.log("- Role (League of Legends) added to " + oldMember.user.username);
          // удалить начальную роль
          var role_user = oldMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
  		      oldMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "DOTA 2"){
        var role = oldMember.guild.roles.find('name', 'Dota 2');
        if(!oldMember.roles.find("name", "Dota 2")){
          oldMember.addRole(role);
          console.log("- Role (Dota 2) added to " + oldMember.user.username);
          // удалить начальную роль
          var role_user = oldMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
  		      oldMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "Overwatch"){
        var role = oldMember.guild.roles.find('name', 'Overwatch');
        if(!oldMember.roles.find("name", "Overwatch")){
          oldMember.addRole(role);
          console.log("- Role (Overwatch) added to " + oldMember.user.username);
          // удалить начальную роль
          var role_user = oldMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
  		      oldMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "Destiny 2"){
        var role = oldMember.guild.roles.find('name', 'Destiny 2');
        if(!oldMember.roles.find("name", "Destiny 2")){
          oldMember.addRole(role);
          console.log("- Role (Destiny 2) added to " + oldMember.user.username);
          // удалить начальную роль
          var role_user = oldMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
  		      oldMember.removeRole(role_user);
          }
        }
      }

      if(`${game}` == "Counter-Strike Global Offensive"){
        var role = oldMember.guild.roles.find('name', 'CS:GO');
        if(!oldMember.roles.find("name", "CS:GO")){
          oldMember.addRole(role);
          console.log("- Role (CS:GO) added to " + oldMember.user.username);
          // удалить начальную роль
          var role_user = oldMember.guild.roles.find('name', 'User');
          if(newMember.roles.find("name", "User")){
            console.log("- Role (user) removed from " + oldMember.user.username);
  		      oldMember.removeRole(role_user);
          }
        }
      }
    }
});

// Detecting New Members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'основной');
  console.log(`- ${member} joined GLHF`);
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;

  // Приветствие (работает)
  var number = Math.floor(Math.random() * 11) + 1;
  if(number == 1){
    channel.send(`Где же ${member} На сервере!`);
  }
  if(number == 2){
      channel.send(`${member} пришел. Вечеринка окончена.`);
  }
  if(number == 3){
    channel.send(`Добро пожаловать, ${member}. Мы ждали тебя ( ͡° ͜ʖ ͡°)`);
  }
  if(number == 4){
    channel.send(`Привет, а не ${member} ли вы ищете?`);
  }
  if(number == 5){
    channel.send(`${member} показался. Подержите мое пиво.`);
  }
  if(number == 6){
    channel.send(`Это ${member} Восславь солнце!`);
  }
  if(number == 7){
    channel.send(`${member} просочился на сервер.`);
  }
  if(number == 8){
    channel.send(`Это птица! Это самолет! Неважно, это просто ${member}.`);
  }
  if(number == 9){
    channel.send(`Вызов брошен - ${member} явился!`);
  }
  if(number == 10){
    channel.send(`Держитесь. ${member} только что зашёл на сервер.`);
  }
  if(number == 11){
    channel.send(`${member} только что подключился. Все сделайте вид, что заняты!`);
  }

  // Начальная роль
  var role = member.guild.roles.find('name', 'User');
  member.addRole(role);

});

client.on("message", async message => {
  if(message.author.bot) return;
  //if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Delete text messages in pubg_top 1 channel, keep pictures
  if(message.channel.name === "pubg_top1"){
    if(message.attachments.array().length > 0){
      //console.log("- " + message.author.username + " posted a screenshot in #pubg_top1.");
    }
    else{
      message.delete();
      console.log("- " + message.author.username + " posted not screenshot in #pubg_top1.");
      message.author.send('Пожалуйста отправляйте только скриншоты с топ 1 в канале **#pubg_top1**, для поиска людей есть **#основной** канал.'
        , {files: ["https://cdn.discordapp.com/attachments/250739232664977408/448035891257278471/glhf_menu.jpg"]});
    }
  }

  if(command === "ping") {
    console.log("- Command Ping were used by " + message.author.username);
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  //add Role by myself
  if(command === "add") {
    let userToModify = message.member;
    let role = message.mentions.roles.first();

    var pubg_role = userToModify.guild.roles.find('name', 'PUBG');
    var lol_role = userToModify.guild.roles.find('name', 'League of Legends');
    var cs_role = userToModify.guild.roles.find('name', 'CS:GO');
    var destiny_role = userToModify.guild.roles.find('name', 'Destiny 2');
    var overwatch_role = userToModify.guild.roles.find('name', 'Overwatch');
    var wot_role = userToModify.guild.roles.find('name', 'World of Tanks');
    var dota = userToModify.guild.roles.find('name', 'Dota 2');

    if(role == pubg_role ||
       role == lol_role ||
       role == cs_role ||
       role == destiny_role ||
       role == overwatch_role ||
       role == dota ||
       role == wot_role){
      userToModify.addRole(role);
      console.log("- " + message.author.username + " added role '" + role.name + "' to himself.");
      message.author.send("Вы успешно добавили себе роль '__*" + role.name + "*__'.");
      // удалить начальную роль
      var role_user = userToModify.guild.roles.find('name', 'User');
      if(userToModify.roles.find("name", "User")){
        console.log("- Role (user) removed from " + userToModify.user.username);
        userToModify.removeRole(role_user);
      }
    }
    else{
      message.author.send("Эту роль нельзя добавить или ее не существует.");
    }

  }

  //remove Role by myself
  if(command === "remove") {
    let userToModify = message.member;
    let role = message.mentions.roles.first();

    var pubg_role = userToModify.guild.roles.find('name', 'PUBG');
    var lol_role = userToModify.guild.roles.find('name', 'League of Legends');
    var cs_role = userToModify.guild.roles.find('name', 'CS:GO');
    var destiny_role = userToModify.guild.roles.find('name', 'Destiny 2');
    var overwatch_role = userToModify.guild.roles.find('name', 'Overwatch');
    var wot_role = userToModify.guild.roles.find('name', 'World of Tanks');
    var dota = userToModify.guild.roles.find('name', 'Dota 2');

    if(role == pubg_role ||
       role == lol_role ||
       role == cs_role ||
       role == destiny_role ||
       role == overwatch_role ||
       role == dota ||
       role == wot_role){
      userToModify.removeRole(role);
      console.log("- " + message.author.username + " removed role '" + role.name + "' from himself.");
      message.author.send("Вы успешно удалили у себе роль '__*" + role.name + "*__'.");
      // удалить начальную роль
      var role_user = userToModify.guild.roles.find('name', 'User');
      if(userToModify.roles.find("name", "User")){
        console.log("- Role (user) removed from " + userToModify.user.username);
        userToModify.removeRole(role_user);
      }
    }
    else{
      message.author.send("Эту роль нельзя удалить или ее не существует.");
    }
  }

  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
    console.log("- Command Say were used by " + message.author.username);
  }

  if(command === "purge") {
    console.log("- Command Purge were used by " + message.author.username);
    if(!message.member.roles.some(r=>["Moderator"].includes(r.name)) ){
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
