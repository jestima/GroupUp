var database = require('./DbConn').pool;


module.exports.getEventsbyCategory = function (category, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("select * from Events where endDate>now() AND category=" + category, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.getEvents = function (callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("select * from Events WHERE endDate>now()", function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.getEventCategories = function (callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("select * from Categories", function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}


module.exports.createEvent = function (eventCategory, startDate, endDate, eventName, eventDescription, eventLat, eventLon, host, startTime, endTime, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("INSERT INTO `Events`(`name`, `description`, `latlon`,`host`, `category`, `startDate`, `endDate`) VALUES ('" + eventName + "','" + eventDescription + "', ST_POINTFROMTEXT('POINT(" + eventLat + " " + eventLon + ")')," + host + "," + eventCategory + ",'" + startDate + " " + startTime + ":00','" + endDate + " " + endTime + ":00')", function (err, rows) {
            conn.release();
            callback({ msg: "Boas" });

        })
    })
}

module.exports.registerUser = function (name, mail, password, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("INSERT INTO `Users`(`name`,`mail` ,`password`) VALUES ('" + name + "','" + mail + "','" + password + "')", function (err, rows) {
            conn.release();
            callback({ msg: "Boas" });

        })
    })
}

module.exports.getUsers = function (mail, password, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("SELECT * FROM `Users` WHERE mail = '" + mail + "' and password = '" + password + "'", function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.joinEvent = function (idEvent, idUser, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("INSERT INTO `EventGroup` (`idEvent`,`idUsers`) VALUES ('" + idEvent + "', '" + idUser + "')", function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.leaveEvent = function (idEvent, idUser, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("DELETE FROM `EventGroup` WHERE idEvent = '" + idEvent + "' AND idUsers = '" + idUser + "'", function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.getEventsbyUser = function (userId, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("SELECT * FROM `EventGroup` WHERE idUsers = '" + userId + "' ", function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.getEventbyId = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("select * from Events where endDate>now() AND id=" + id, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.getEventLocation = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("select ST_X(latlon) as lat, ST_Y(latlon) as lon from Events where id=" + id, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}


module.exports.deleteEvent = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("delete from Events where id=" + id, function (err, rows) {
            conn.release();
            callback({ msg: "okeh" });

        })
    })
}

module.exports.deleteGroup = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("delete from EventGroup where idEvent=" + id, function (err, rows) {
            conn.release();
            callback({ msg: "okeh" });

        })
    })
}


module.exports.getUserPref = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("SELECT * FROM `UserPreferences` where idUser=" + id, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.postUserPref = function (idUser, idCat, callback, next) {
    var idsCat = idCat.split(" ")

    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else {
            for (i in idsCat) {
                conn.query("INSERT INTO `UserPreferences`(`idCat`, `idUser`) VALUES (" + idsCat[i] + "," + idUser + ")")
            }
            conn.release
            callback({ msg: "boas" })
        }
    })
}

module.exports.resetUserPref = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("delete from UserPreferences where idUser=" + id, function (err, rows) {
            conn.release();
            callback({ msg: "okeh" });

        })
    })
}

module.exports.getUserInfo = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("SELECT * FROM `Users` where id=" + id, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.updateLocation = function (lat,lon,id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        } else conn.query("UPDATE `Users` SET `latlon`= ST_POINTFROMTEXT('POINT(" + lat + " " + lon + ")') WHERE id=" + id, function (err, rows) {
            conn.release();
            callback({ msg: "okeh" });

        })
    })
}
