var express = require("express");
var router = express.Router();
var EventsDAO = require("../models/EventsDAO");

router.get("/Categories", function (req, res, next) {
    EventsDAO.getEventCategories(function (result) {
        res.send(result);
    }, next);
});

router.get("/", function (req, res, next) {
    EventsDAO.getEvents(function (result) {
        res.send(result);
    }, next);
});

router.get("/Categories/:category", function (req, res, next) {
    EventsDAO.getEventsbyCategory(
        req.params.category,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.post("/Create", function (req, res, next) {
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




router.post("/Group/Join", function (req, res, next) {
    EventsDAO.joinEvent(
        req.body.idEvent,
        req.body.idUser,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.delete("/Group/Leave", function (req, res, next) {
    EventsDAO.leaveEvent(
        req.body.idEvent,
        req.body.idUser,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.delete("/Delete", function (req, res, next) {
    EventsDAO.deleteEvent(
        req.body.idEvent,
        function (result) {
            res.send(result);
        },
        next
    );
});

/*router.post("/Events/DeleteGroup", function (req, res, next) {
    EventsDAO.deleteGroup(
        req.body.idEvent,
        function (result) {
            res.send(result);
        },
        next
    );
});*/

router.get("/Group/:userId", function (req, res, next) {
    EventsDAO.getEventsbyUser(
        req.params.userId,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.get("/:eventId", function (req, res, next) {
    EventsDAO.getEventbyId(
        req.params.eventId,
        function (result) {
            res.send(result);
        },
        next
    );
});

router.get("/:eventId/Location", function (req, res, next) {
    EventsDAO.getEventLocation(
        req.params.eventId,
        function (result) {
            res.send(result);
        },
        next
    );
});






module.exports = router;