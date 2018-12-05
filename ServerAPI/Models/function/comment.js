var pool = require('../index'); //reference of dbconnection.js  
var comment = {
    getAllComment: function(callback) {
        return pool.query("Select * from comment", callback);
    },
    getCommentBy_cmt_code: function(cmt_code, callback) {
        return pool.query("select * from comment where cmt_code=?", [cmt_code], callback);
    },
    getCommentBy_tp_code: function(cmt_code, callback) {
        return pool.query("select * from comment where tp_code=?", [cmt_code], callback);
    },
    getCommentBy_user_code: function(cmt_code, callback) {
        return pool.query("select * from comment where user_code=?", [cmt_code], callback);
    },
    addComment: function(comment, callback) {
        return pool.query("Insert into comment values(?,?,?,?)", [comment.cmt_code, comment.tp_code, comment.user_code, comment.cmt_content], callback);
    },
    deleteComment: function(cmt_code, callback) {
        return pool.query("delete from comment where cmt_code=?", [cmt_code], callback);
    },
    updateComment: function(cmt_code, comment, callback) {
        return pool.query("update comment set cmt_content=? where cmt_code=?", [comment.cmt_content, cmt_code], callback);
    }
};
module.exports = comment;