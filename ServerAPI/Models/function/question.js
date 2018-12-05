var pool = require('../index'); //reference of dbconnection.js  
var question = {
    getAllQuestion: function(callback) {
        return pool.query("Select * from question", callback);
    },
    getQuestionById: function(qs_code, callback) {
        return pool.query("select * from question where qs_code=?", [qs_code], callback);
    },
    getQuestionBy_tp_code: function(tp_code, callback) {
        return pool.query("select * from question where tp_code=?", [tp_code], callback);
    },
    addQuestion: function(question, callback) {
        return pool.query("Insert into question values(?,?,?,?)", [question.qs_code, question.qs_content, question.qs_datecreate, question.tp_code], callback);
    },
    deleteQuestion: function(qs_code, callback) {
        return pool.query("delete from question where fb_code=?", [qs_code], callback);
    },
    updateQuestion: function(qs_code, question, callback) {
        return pool.query("update question set qs_content=? where qs_code=?", [question.qs_content, qs_code], callback);
    }
};
module.exports = question;