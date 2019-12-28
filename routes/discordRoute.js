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

module.exports = discordRouter