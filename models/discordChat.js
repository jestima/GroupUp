

module.exports.createChannel = function (eventName, callback, next) {
    client.channels.get('660188056648679437').send(`!createRole "${eventName}"`)
    callback({ msg: "sucesso" })

}

module.exports.giveRole = function (eventName) {
    // client.channels.get('660188056648679437').send(`!createRole "${eventName}"`)

}


