var pool = require('../index'); //reference of dbconnection.js  
var rep_comment = {
    getAllRep_comment: function(callback) {
        return pool.query("Select * from rep_comment", callback);
    },
    getRep_commentBy_rep_cmt_code: function(rep_cmt_code, callback) {
        return pool.query("select * from rep_comment where rep_cmt_code=?", [rep_cmt_code], callback);
    },
    getRep_commentBy_cmt_code: function(cmt_code, callback) {
        return pool.query("select * from rep_comment where cmt_code=?", [cmt_code], callback);
    },
    addRep_comment: function(rep_comment, callback) {
        return pool.query("Insert into rep_comment values(?,?,?,?)", [rep_comment.rep_cmt_code, rep_comment.cmt_code, rep_comment.user_code, rep_comment.rep_cmt_content], callback);
    },
    deleteRep_comment: function(rep_cmt_code, callback) {
        return pool.query("delete from rep_comment where rep_cmt_code=?", [rep_cmt_code], callback);
    },
    updateRep_comment: function(rep_cmt_code, rep_comment, callback) {
        return pool.query("update rep_comment set rep_cmt_content=? where rep_cmt_code=?", [rep_comment.rep_cmt_content, rep_cmt_code], callback);
    }
};
module.exports = rep_comment;