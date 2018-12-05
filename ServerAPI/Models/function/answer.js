var pool = require('../index'); //reference of dbconnection.js  
var answer = {
    getAllAnswer: function(callback) {
        return pool.query("Select * from answer", callback);
    },
    getAnswerById: function(qs_code, callback) {
        return pool.query("select * from answer where qs_code=?", [qs_code], callback);
    },
    addAnswer: function(answer, callback) {
        return pool.query("Insert into answer values(?,?,?,?)", [answer.asw_code, answer.asw_content, answer.asw_answer, answer.qs_code], callback);
    },
    deleteAnswer: function(asw_code, callback) {
        return pool.query("delete from answer where asw_code=?", [asw_code], callback);
    },
    updateAnswer: function(asw_code, answer, callback) {
        return pool.query("update answer set asw_content=?, asw_answer=?, qs_code=? where asw_code=?", [answer.asw_content, answer.asw_answer, answer.query, asw_code], callback);
    }
};
module.exports = answer;