var pool = require('../index'); //reference of dbconnection.js  
var rank = {
    getAllrank: function(callback) {
        return pool.query("Select * from rank", callback);
    },
    getrankById: function(rank_code, callback) {
        return pool.query("select * from rank where rank_code=?", [rank_code], callback);
    },
    addrank: function(rank, callback) {
        return pool.query("Insert into rank values(?,?,?)", [rank.rank_code, rank.rank_name, rank.rank_point], callback);
    },
    deleterank: function(rank_code, callback) {
        return pool.query("delete from rank where rank_code=?", [rank_code], callback);
    },
    updaterank: function(rank_code, rank, callback) {
        return pool.query("update rank set rank_name=?,rank_point=? where rank_code=?", [rank.rank_name, rank.rank_point, rank_code], callback);
    }
};
module.exports = rank;