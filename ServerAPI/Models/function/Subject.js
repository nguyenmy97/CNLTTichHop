var pool = require('../index'); //reference of dbconnection.js  
var Subject = {
    getAllSubject: function(callback) {
        return pool.query("Select * from Subject", callback);
    },
    getSubjectById: function(sb_code, callback) {
        return pool.query("select * from Subject where sb_code=?", [sb_code], callback);
    },
    addSubject: function(Subject, callback) {
        return pool.query("Insert into Subject values(?,?,?)", [Subject.sb_code, Subject.sb_name, Subject.sb_status], callback);
    },
    deleteSubject: function(sb_code, callback) {
        return pool.query("delete from Subject where sb_code=?", [sb_code], callback);
    },
    updateSubject: function(sb_code, Subject, callback) {
        return pool.query("update Subject set sb_name=?,sb_status=? where sb_code=?", [Subject.sb_name, Subject.sb_status, sb_code], callback);
    }
};
module.exports = Subject;