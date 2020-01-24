const prefix = "!"
const Discord = require('discord.js');
require('dotenv').config()
var client = new Discord.Client();


client.on('message', (receivedMessage) => {

    if (receivedMessage.content.startsWith(`${prefix}`)) {
        processCommand(receivedMessage)
    }
})
client.on('guildMemberAdd', (member) => {
    member.send(`Welcome to Group Up Discord Server, <@${member.id}>. Here you can chat with other users and also have private access to your favorite event's channels. If you already have linked your Discord account on our website, you can go to 'My Events' page and click the 'Get Discord Roles' button. It's all automatic!`)
    let role = member.guild.roles.find(r => r.name === "Group Up User")
    member.addRole(role).catch(console.error)
})

client.on('ready', () => {

    client.user.setActivity("Group Up", { type: "WATCHING" })
})
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    let argumentsString = ""
    for (i in arguments) argumentsString += arguments[i] + " "

    if (primaryCommand == "create") {
        createCommand(arguments, argumentsString, receivedMessage)
    } else if (primaryCommand == "giverole") {
        giveRoleCommand(receivedMessage, argumentsString)
    } else if (primaryCommand == "createRole") {
        createRole(receivedMessage, argumentsString)
    }
    else {
        receivedMessage.channel.send("I don't understand the command.")
    }
}
function extractFirstText(str) {
    const matches = str.match(/"(.*?)"/);
    return matches
        ? matches[1]
        : str;
}
function createCommand(arguments, argumentsString, receivedMessage) {
    if (arguments.length > 0) {
        var server = receivedMessage.guild
        server.createChannel(extractFirstText(argumentsString), {
            type: "text",
            permissionOverwrites: [
                {
                    id: receivedMessage.guild.defaultRole.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: receivedMessage.guild.roles.find(r => r.name === extractFirstText(argumentsString)),
                    allow: ['VIEW_CHANNEL']
                }
            ]
        })
            .then(channel => {
                let category = server.channels.find(c => c.name == "🔥Eventos🔥" && c.type == "category");

                if (!category) throw new Error("Category channel does not exist");
                channel.setParent(category.id);
            }).catch(console.error);
    } else {
        receivedMessage.channel.send("Invalid arguments. JK I'll never go here.`")
    }
}

async function giveRoleCommand(receivedMessage, argumentsString) {
    let role = receivedMessage.guild.roles.find(r => r.name === extractFirstText(argumentsString))
    if (!role) {
        receivedMessage.author.send(`Hey there <@${receivedMessage.author.id}>, the event name you typed is either misspelled or doesn't exist.`)
    } else if (/*.author.id == receivedMessage.mentions.members.first().id*/ receivedMessage.author.bot) {
        let member = receivedMessage.mentions.members.first();
        member.addRole(role).catch(console.error)
    } else {
        receivedMessage.author.send(`Hey there <@${receivedMessage.author.id}>, you can't choose other people's roles!!!`)
    }

}

async function createRole(receivedMessage, argumentsString) {
    let role = receivedMessage.guild.roles.find(r => r.name === extractFirstText(argumentsString))
    if (!role) {
        role = await receivedMessage.channel.guild.createRole({
            name: extractFirstText(argumentsString),
            color: 'BLUE'
        })
    }
    client.channels.get('660188023983570986').send(`!create "${extractFirstText(argumentsString)}"`)

}



client.login(process.env.myBOT_TOKEN);

exports.client = client;