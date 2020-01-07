var client = require('./discordBot').client

module.exports.createChannel = function (eventName, callback, next) {
    client.channels.get('660188056648679437').send(`!createRole "${eventName}"`)
    callback("OK")

}

module.exports.giveRoles = function (discId, joinedEventNames, callback, next) {
    if (joinedEventNames.constructor === Array) {
        for (i in joinedEventNames) {
            client.channels.get('660188056648679437').send(`!giverole <@${discId}> "${joinedEventNames[i]}"`)
        }
    } else {
        client.channels.get('660188056648679437').send(`!giverole <@${discId}> "${joinedEventNames}"`)
    }

    callback("OK")
}



