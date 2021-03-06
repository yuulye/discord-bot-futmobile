module.exports = (u, msg, cmd, args, client) => {
  console.log(cmd, args);
  if (cmd === 'list') {
    if (!args[0]) {
      u.w('Please specify the role.');
      return;
    }
    require('./bot/list.js')(u, cmd, args);
  }
  if (cmd === 'draw') {
    require('./common/sheets.js')(
      require('./bot/draw.js')(u)
      , '19HSTRRyScAtnzyYcXCFz_9rzopum5jLi7dQ5YpAgl8k'
    );
  }
  if (cmd === 'hst') {
    require('./bot/hst.js')(u, msg, cmd, args, client);
  }
  if (cmd === 'read') {
    require('./story.js')(client, msg);
  }
  if (cmd === 'test') {
    u.w("todo: test");
  }
  if (cmd === 'tour') {
    require('./sheet.js')(args, msg, client);
  }
  if (cmd === 'vsa') {
    if (
      u.a[0] === undefined
      ||
      (
        !u.a[0].includes('standing')
        &&
        !u.a[0].includes('fixture')
        &&
        !u.a[0].includes('score')
        &&
        !u.a[0].includes('round')
      )
    ) {
      u.w('The $vsa commands are: standing/fixture/score/round');
      return;
    }

    require('./common/sheets.js')(
      require('./bot/vsa.js')(u, args)
    );
  }
  if (cmd === 'league') {
    require('./common/sheets.js')(
      require('./bot/league.js')(u, msg, args)
    );
  }
  if (cmd === 'ping'){
    const pingTypes = [
  "🏓|**Pong.**Testing,testing.Is this thing working?",
  "🏓|**Pong.**Match point.Let's see what you've got.",
  "🏓|**Pong.**Keep on pinging me.",
  "🏓|**Pong.**I am alive.",
  "🏓|**Pong.**Can't play now.Got a meeting with the bots.We're planning to conquer the wor... Wait!Did I say that loudly?!",
  "🏓|**Pong.**You had a 0.1% chance of getting this message.",
];
const pingMultiply = [
  250,
  250,
  250,
  244,
  5,
  1,
];

 let pingNames = [];
for (let i = 0; i < pingTypes.length; i++) {
  const type = pingTypes[i];
  for (let j = 0; j < pingMultiply[i]; j++) {
    pingNames.push(type);
  }
}

 let pongName = pingNames[Math.floor(Math.random()* pingNames.length)];
var pong=pongName;
msg.channel.send(pong);
}
   if(!args[0] && cmd==='help'){
msg.channel.send(" ```Standard Command List```\nℹ | Use `$help [command]` if you want to get more info on a specific command. \n\n  **1.Info.**-`help` `ping` `bot` `list`;\n **2.League**-`league` `tour`; \n**3.Fun**- `read` `8ball`;\n**4.Mod**-`announce`;\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help' && args[0] && args[0] === 'help'){
msg.channel.send("**```ℹ | $help```** \n **Use**:Used to show a list of commands.Also shows command specific help. \n **Command**:$help `[command]` \n\n **Example**:\n `$help`-Shows command list. \n `$help league`-Explains the use of the `league` command.\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help'&& args[0] && args[0] === 'ping' ){
msg.channel.send("**```ℹ | $ping```** \n **Use**:Used to check if bot is running. \n **Command**:$ping \n\n **Example**:\n `$ping`-Bot answers if everything is good.\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help'&& args[0] && args[0] === 'league' ){
msg.channel.send("**```ℹ | $league```** \n **Use**:Used to get information on AHQ League. \n **Command**:$league `[orderBy | limit | reverse]` \n `orderBy`-name (alphabetical order),ovr (overall rating order),chem (chamistry order),total(overall rating+chemistry order)\n `limit`-number of players listed \n `reverse`-1(normal order),0(reversed order)\n\n **Example**:\n`$league`-Lists players based on their ovr+chm points. \n `$league name 15`-Lists first 15 players in alphabetical order. \n `$league ovr 10 0`-Lists last 10 players in ovr order.\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help'&& args[0] && args[0] === 'tour'){
msg.channel.send("**```ℹ | $tour```** \n **Use**:Used to get information on a certain H2H Tournament going on. \n **Command**:$tour `[fixtures | standing | score]` \n $tour fixtures `[user | played/left]` \n $tour score `<match_id>` `home_score` `away_score`\n\n **Example**:\n `$tour fixtures @user left`-shows a user's left fixtures \n `$tour standing`-shows tourney's current standing \n `$tour score 19 2 1`-updates match 19 with the 2-1 result.\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help' && args[0] && args[0] === 'read' ){
msg.channel.send("**```ℹ | $read```** \n **Use**:Used to read the latest part of the history in #one_word_story which is accessible by Apprentice 3 or higher ranked users. \n **Command**:$read \n\n **Example**:\n `$read`-shows latest part of the history.\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help' && args[0] && args[0] === 'bot' ){
msg.channel.send("**```ℹ | $bot```** \n **Use**:Used to get general information on bot. \n **Command**:$bot \n\n **Example**:\n `$bot`-shows an embed with info on bot.\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help' && args[0] && args[0] === '8ball' || cmd==='8ball' && args[0] && args[0]===null){
msg.channel.send("**```ℹ | $8ball```** \n **Use**:Used to get an answer of a \"Yes/No\" question based on my (often controversial) opinion. \n **Command**:$8ball `[question]` \n\n **Example**:\n `$8ball Am I a bot?`-Gives an answer to the question.\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help' && args[0] && args[0] === 'announce'){
msg.channel.send("**```ℹ | $x announce```** \n **Use**:Used to make me say something (usually announcement). \n **Command**:$x announce `[text]` \n\n **Example**:\n `$x announce Hi!`-Command gets deleted and I say \"Hi!\".\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='help' && args[0] && args[0] === 'list'){
msg.channel.send("**```ℹ | $list```** \n **Use**:Used to make a list of users with a specific role. \n **Command**:$list `[role]` \n\n **Example**:\n `$list Apprentice 3`-Creates a list of users with the Apprentice 3 role.\n\n ```>Don't include brackets when using the commands.```");
}
   if(cmd==='bot'){
     const Discord = require('discord.js');
   const botEmbed = new Discord.RichEmbed()
	.setColor('#1d9eaf')
	.setTitle('League Bot')
	.setURL('https://github.com/fifa-mobile')
	.setAuthor('League Bot')
	.setDescription('Info on League Bot')
        .setThumbnail('https://fifa-mobile.github.io/images/discordbot-bot-discord-11563261320iwm1tpnosh.png')
	.addField('Creator:', 'yuuyle')
	.addField('Server(s):', 'AHQ Leagues', true)
	.addField('Date created:', '2nd November 2019', true)
	.addField('Use:', 'General purpose', true)
	.setTimestamp()
	.setFooter('This is me!');
   msg.channel.send(botEmbed);
}
   if(cmd==='8ball'&& args[0] && args[0] !== null){
     const _8ballAsw = [
   "🎱 | Yep!",
   "🎱 | You may rely on it.",
   "🎱 | Without a doubt!",
   "🎱 | As I see it,YES.",
   "🎱 | Concentrate and ask again.",
   "🎱 | I didn't get it.Could you ask again please?",
   "🎱 | My sources say NO.",
   "🎱 | Don't count on it.",
   "🎱 | Outlook not so good.",
   "🎱 | Very doubtful.",
];
   let _8ball = _8ballAsw[Math.floor(Math.random()* _8ballAsw.length)];
   msg.channel.send(_8ball);
}
  /* if(cmd==='credits' && args[0] && args[0]===null || cmd==='help' && args[0] && args[0]==='credits'){
   Here will be info on the credits command
   }
   if(cmd==='daily' && args[0] && args[0]===null){
   Bot will use an if/else command to see if there is left more than 0 seconds until next daily.
If yes it will message "Daily credits reset in"+time variable +"!".Else it will add the user 100 credits and start timer.
   } 
   if(cmd==='credits' && args[0] && args[0]==='balance'){
   Send message:"You have"+balance+"FIFA Points!"
}
   if(cmd==='credits' && args [0] && args[0]==='transfer'){
   Removes user x amount of coins and adds same amount to reciever.
   msg.channel.send('ℹ | Transaction done.');
}
 */

  if (cmd==='x') {
    if (msg.member.roles.find(r => r.name === 'Staff')) {
      if (args[0] && args[0]==="announce") {
        if (!args[1]) {
          msg.channel.send(
            'What do you want to announce?'
          );
          return;
        }
        let text = [];
        for (let i = 1; i < args.length; i++) {
          text.push(args[i]);
        }
        msg.channel.send(text.join(' '));
        msg.delete();
      }
    } else {
      msg.channel.send(
        "You do not have enough permissions"
        + " to use this command."
      );
    }
  }
};
