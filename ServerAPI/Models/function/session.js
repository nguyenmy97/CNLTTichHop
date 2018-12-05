var pool = require('../index'); //reference of dbconnection.js  
var Session = {
    getAllSession: function(callback) {
        return pool.query("Select * from Session", callback);
    },
    getSessionById: function(ss_code, callback) {
        return pool.query("select * from Session where ss_code=?", [ss_code], callback);
    },
    addSession: function(Subject, callback) {
        return pool.query("Insert into Session values(?,?,?,?,?,?,?,?)", [Session.ss_code, Session.ss_name,
            Session.ss_datecreate, Session.ss_date_start_reg, Session.ss_date_end_reg, Session.ss_date_start_doword, Session.ss_date_end_doword, Session.tp_code
        ], callback);
    },
    deleteSession: function(ss_code, callback) {
        return pool.query("delete from Session where ss_code=?", [ss_code], callback);
    },
    updateSession: function(ss_code, Subject, callback) {
        return pool.query("update Session set ss_name=?,ss_datecreate=?,ss_date_start_reg=?, ss_date_end_reg=?, ss_date_start_doword=?, tp_code=? where sb_code=?", [Session.ss_name,
            Session.ss_datecreate, Session.ss_date_start_reg, Session.ss_date_end_reg, Session.ss_date_start_doword, ss_code, Session.tp_code
        ], callback);
    }
};
module.exports = Session;