var express = require("express");
var discordRouter = express.Router();
var discordDAO = require("../models/discordChat.js");


discordRouter.post("/CreateChannel", function (req, res, next) {
    discordDAO.createChannel(req.body.eventName)
});

module.exports = discordRouter