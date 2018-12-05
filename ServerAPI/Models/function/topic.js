var pool = require('../index');
var topic = {
    getAllTopic: function(callback) {
        return pool.query("Select * from topic", callback);
    },
    getTopicById: function(tp_code, callback) {
        return pool.query("select * from topic where tb_code=?", [tp_code], callback);
    },
    getTopicBy_SB_code: function(sb_code, callback) {
        return pool.query("select * from topic where sb_code=?", [sb_code], callback);
    },
    addTopic: function(topic, callback) {
        return pool.query("Insert into topic values(?,?,?,?)", [topic.tp_code, topic.tp_content, topic.sb_code, topic.tp_fee], callback);
    },
    deleteTopic: function(tp_code, callback) {
        return pool.query("delete from topic where tp_code=?", [tp_code], callback);
    },
    updateTopic: function(tp_code, topic, callback) {
        return pool.query("update topic set tp_content=?,tp_fee=? where tp_code=?", [topic.tp_content, topic.tp_fee, tp_code], callback);
    }
};
module.exports = topic;