var pool = require('../index'); //reference of dbconnection.js  
var TopicReg = {
    getAllTopicReg: function(callback) {
        return pool.query("Select * from topic_reg", callback);
    },
    getTopicRegById: function(tpr_code, callback) {
        return pool.query("select * from topic_reg where tpr_code=?", [tpr_code], callback);
    },
    addTopicReg: function(TopicReg, callback) {
        return pool.query("Insert into topic_reg values(?,?,?)", [TopicReg.tpr_code], callback);
    },
    deleteTopicReg: function(tpr_code, callback) {
        return pool.query("delete from topic_reg where tpr_code=?", [tpr_code], callback);
    },
    updateTopicReg: function(tpr_code, TopicReg, callback) {
        return pool.query("update topic_reg set tp_code=? where tpr_code=?", [TopicReg.tp_code, tpr_code], callback);
    }
};
module.exports = TopicReg;