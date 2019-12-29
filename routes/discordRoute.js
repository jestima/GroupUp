var express = require("express");
var discordRouter = express.Router();
var discordDAO = require("../models/discordChat");



discordRouter.post("/CreateChannel", function (req, res, next) {
    discordDAO.createChannel(
        req.body.eventName,
        function (result) {
            res.send(result)
        },
        next
    )

});

discordRouter.post("/GiveRoles", function (req, res, next) {
    console.log(req.body.joinedEventsNames)
    discordDAO.giveRoles(
        req.body.discId,
        req.body.joinedEventsNames,
        function (result) {
            res.send(result)
        },
        next
    )

});










module.exports = discordRouter