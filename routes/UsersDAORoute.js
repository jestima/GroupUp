var express = require("express");
var userRouter = express.Router();
var EventsDAO = require("../models/EventsDAO");

userRouter.post("/CreateUser", function (req, res, next) {
    EventsDAO.registerUser(
        req.body.name,
        req.body.mail,
        req.body.password,
        function (result) {
            res.send(result);
        },
        next
    );
});


userRouter.post("/", function (req, res, next) {
    EventsDAO.getUsers(
        req.body.mail,
        req.body.password,
        function (result) {
            res.send(result);
        },
        next
    );
});

userRouter.get("/:userId/Preferences", function (req, res, next) {
    EventsDAO.getUserPref(
        req.params.userId,
        function (result) {
            res.send(result);
        },
        next
    );
});


userRouter.post("/User/Preferences", function (req, res, next) {
    EventsDAO.postUserPref(
        req.body.idUser,
        req.body.idCat,
        function (result) {
            res.send(result);
        },
        next
    );
});

/*router.post("/Users/User/Preferences/Reset", function (req, res, next) {
    EventsDAO.resetUserPref(
        req.body.idUser,
        function (result) {
            res.send(result);
        },
        next
    );
});*/


userRouter.get("/:userId", function (req, res, next) {
    EventsDAO.getUserInfo(
        req.params.userId,
        function (result) {
            res.send(result);
        },
        next
    );
});

userRouter.put("/User/latlon", function (req, res, next) {
    EventsDAO.updateLocation(
        req.body.lat,
        req.body.lon,
        req.body.idUser,
        req.body.distrito,
        function (result) {
            res.send(result);
        },
        next
    );
});

userRouter.post("/User/Discord/", function (req, res, next) {
    EventsDAO.linkDiscord(
        req.body.discId,
        req.body.userId,
        function (result) {
            res.send(result);
        },
        next
    );
});


userRouter.get("/Location/District", function (req, res, next) {
    EventsDAO.getUsersFromDistrict(
        function (result) {
            res.send(result);
        },
        next
    );
});

userRouter.get("/:user/DiscordRoleInfo", function (req, res, next) {
    EventsDAO.getDiscordRoleInfo(req.params.user,
        function (result) {
            res.send(result);
        },
        next
    );
});

module.exports = userRouter;
