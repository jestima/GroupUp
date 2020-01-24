var database = require('./DbConn').pool;


module.exports.getEventsbyCategory = function (category, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release()
            callback(err, { code: 500, status: "Error connecting to database." })
            return
        } else conn.query("select * from Events where endDate>date_sub(now(),INTERVAL 1 day) AND status = 'active' AND category=?", category, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.getEvents = function (callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("select * from Events WHERE endDate>date_sub(now(),INTERVAL 1 day) AND status = 'active'", function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.getEventCategories = function (callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("select * from Categories", function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}


module.exports.createEvent = function (eventCategory, startDate, endDate, eventName, eventDescription, eventLat, eventLon, host, startTime, endTime, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("INSERT INTO `Events`(`name`, `description`, `latlon`,`host`, `category`, `startDate`, `endDate`) VALUES ('" + eventName + "','" + eventDescription + "', ST_POINTFROMTEXT('POINT(" + eventLat + " " + eventLon + ")')," + host + "," + eventCategory + ",'" + startDate + " " + startTime + ":00','" + endDate + " " + endTime + ":00')", function (err, rows) {
            conn.release();
            callback({ msg: "Boas" });

        })
    })
}

module.exports.registerUser = function (name, mail, password, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("INSERT INTO `Users`(`name`,`mail` ,`password`) VALUES (?,?,?)", [name, mail, password], function (err, rows) {
            conn.release();
            callback({ msg: "Boas" });

        })
    })
}

module.exports.getUsers = function (mail, password, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("SELECT `id`,`name` FROM `Users` WHERE mail = ? and password = ?", [mail, password], function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.joinEvent = function (idEvent, idUser, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("INSERT INTO `EventGroup` (`idEvent`,`idUsers`) VALUES (?,?)", [idEvent, idUser], function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.leaveEvent = function (idEvent, idUser, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("DELETE FROM `EventGroup` WHERE idEvent = ? AND idUsers = ?", [idEvent, idUser], function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.getEventsbyUser = function (userId, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("SELECT * FROM `EventGroup` WHERE idUsers = ? ", userId, function (err, rows) {
            conn.release();
            callback(rows);
        })
    })
}

module.exports.getEventbyId = function (id, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("select * from Events where id=?", id, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.getEventLocation = function (id, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("select ST_X(latlon) as lat, ST_Y(latlon) as lon from Events where id=?", id, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}


module.exports.deleteEvent = function (id, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else
            //conn.query("delete from EventGroup where idEvent=?", id)
        conn.query("update `Events` SET `status` = 'deleted' where id=?", id, function (err, rows) {
            conn.release();
            callback({ msg: "okeh" });

        })
    })
}

/*module.exports.deleteGroup = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) return
        } else conn.query("delete from EventGroup where idEvent=" + id, function (err, rows) {
            conn.release();
            callback({ msg: "okeh" });

        })
    })
}*/


module.exports.getUserPref = function (id, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("SELECT * FROM `UserPreferences` where idUser=?", id, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.postUserPref = function (idUser, idCat, callback) {
    var idsCat = idCat.split(" ")
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else {
            conn.query("delete from UserPreferences where idUser=?", idUser)
            for (i in idsCat) {
                conn.query("INSERT INTO `UserPreferences`(`idCat`, `idUser`) VALUES (?,?)", [idsCat[i], idUser])
            }
            conn.release()
            callback({ msg: "boas" })
        }
    })
}

/*module.exports.resetUserPref = function (id, callback, next) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) return
        } else conn.query("delete from UserPreferences where idUser=" + id, function (err, rows) {
            conn.release();
            callback({ msg: "okeh" });

        })
    })
}*/

module.exports.getUserInfo = function (id, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("SELECT `mail`,`name`,`latlon`,`discId` FROM `Users` where id=?", id, function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.updateLocation = function (lat, lon, id,distrito, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else {
            conn.query("UPDATE `Users` SET `latlon`= ST_POINTFROMTEXT('POINT(" + lat + " " + lon + ")'), `distrito`='"+distrito+"' WHERE id=?", id, function (err, rows) {
                conn.release();
                callback({ msg: "okeh" });

            })
        }
    })
}

module.exports.linkDiscord = function (discId, userId, callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("UPDATE `Users` SET `discId`=? WHERE id=?", [discId, userId], function (err, rows) {
            conn.release();
            callback({ msg: "okeh" });

        })
    })
}

module.exports.updateExpired = function (callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("UPDATE `Events` SET `status`='expired' WHERE `endDate` < CURRENT_DATE", function (err, rows) {
            conn.release();
            callback({msg: "OK"});

        })
    })
}


module.exports.getUsersFromDistrict = function (callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("SELECT distrito, COUNT(*) AS usersFromDistrict FROM Users GROUP BY distrito", function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}

module.exports.getDiscordRoleInfo = function (id,callback) {
    database.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            callback(err, { code: 500, status: "Error connecting to database." }) 
            return
        } else conn.query("SELECT Events.name FROM `Events` INNER JOIN `EventGroup` ON Events.id = EventGroup.idEvent WHERE EventGroup.idUsers = ? AND Events.status = 'active'; SELECT Users.discId FROM Users WHERE Users.id = ?",[id,id], function (err, rows) {
            conn.release();
            callback(rows);

        })
    })
}
