var express = require("express");
var router = express.Router();
var EventsDAO = require("../models/EventsDAO");

router.get("/Events/Categories", function (req, res, next) {
    EventsDAO.getEventCategories(function (result) {
        res.send(result);
    }, next);
});

router.get("/Events", function (req, res, next) {
    EventsDAO.getEvents(function (result) {
        res.send(result);
    }, next);
});

router.get("/Events/Categories/:category", function (req, res, next) {
    EventsDAO.getEventsbyCategory(
        req.params.category,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Events/Create", function (req, res, next) {
    EventsDAO.createEvent(
        req.body.eventCategory,
        req.body.startDate,
        req.body.endDate,
        req.body.eventName,
        req.body.eventDescription,
        req.body.eventLat,
        req.body.eventLon,
        req.body.host,
        req.body.startTime,
        req.body.endTime,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Users/CreateUser", function (req, res, next) {
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

router.post("/Users", function (req, res, next) {
    EventsDAO.getUsers(
        req.body.mail,
        req.body.password,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Events/Group/Join", function (req, res, next) {
    EventsDAO.joinEvent(
        req.body.idEvent,
        req.body.idUser,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Events/Group/Leave", function (req, res, next) {
    EventsDAO.leaveEvent(
        req.body.idEvent,
        req.body.idUser,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Events/Delete", function (req, res, next) {
    EventsDAO.deleteEvent(
        req.body.idEvent,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Events/DeleteGroup", function (req, res, next) {
    EventsDAO.deleteGroup(
        req.body.idEvent,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.get("/Events/Group/:userId", function (req, res, next) {
    EventsDAO.getEventsbyUser(
        req.params.userId,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.get("/Events/:eventId", function (req, res, next) {
    EventsDAO.getEventbyId(
        req.params.eventId,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.get("/Events/:eventId/Location", function (req, res, next) {
    EventsDAO.getEventLocation(
        req.params.eventId,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.get("/Users/:userId/Preferences", function (req, res, next) {
    EventsDAO.getUserPref(
        req.params.userId,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Users/User/Preferences", function (req, res, next) {
    EventsDAO.postUserPref(
        req.body.idUser,
        req.body.idCat,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Users/User/Preferences/Reset", function (req, res, next) {
    EventsDAO.resetUserPref(
        req.body.idUser,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.get("/Users/:userId", function (req, res, next) {
    EventsDAO.getUserInfo(
        req.params.userId,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Users/User/latlon/Update", function (req, res, next) {
    EventsDAO.updateLocation(
        req.body.lat,
        req.body.lon,
        req.body.idUser,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Users/User/Discord/", function (req, res, next) {
    EventsDAO.linkDiscord(
        req.body.discId,
        req.body.userId,
        function (result) {
            res.send(result);
        },
        next
    );
});



module.exports = router;