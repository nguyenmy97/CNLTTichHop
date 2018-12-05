var pool = require('../index');
var Success = {
    getAllSuccess: function(callback) {
        return pool.query("Select * from Success", callback);
    },
    getSuccessById: function(sce_code, callback) {
        return pool.query("select * from Success where sce_code=?", [sce_code], callback);
    },
    addTopic: function(Success, callback) {
        return pool.query("Insert into Success values(?,?,?,?,?,?)", [Success.sce_code, Success.user_code, Success.tp_code, Success.sce_rate, Success.sce_point, Success.sce_rank], callback);
    },
    deleteSuccess: function(sce_code, callback) {
        return pool.query("delete from Success where sce_code=?", [sce_code], callback);
    },
    updateSuccess: function(tp_code, topic, callback) {
        return pool.query("update Success set sce_rate=?,sce_point=?, sce_rank=? where sce_code=?", [Success.sce_rate, Success.sce_point, Success.sce_rank, sce_code], callback);
    }
};
module.exports = Success;