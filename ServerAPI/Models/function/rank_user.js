var pool = require('../index'); //reference of dbconnection.js  
var rank_user = {
    getAllRank_user: function(callback) {
        return pool.query("Select * from rank_user", callback);
    },
    getRank_userBy_Rank_code: function(rank_code, callback) {
        return pool.query("select * from rank_user where rank_code=?", [rank_code], callback);
    },
    getRank_userBy_User_code: function(user_code, callback) {
        return pool.query("select * from rank_user where user_code=?", [user_code], callback);
    },
    addRank_user: function(rank_user, callback) {
        return pool.query("Insert into rank_user values(?,?)", [rank_user.rank_code, rank_user.user_code], callback);
    },
    deleteRank_user: function(user_code, callback) {
        return pool.query("delete from rank_user where user_code=?", [user_code], callback);
    },
    updateRank_user: function(qs_code, rank_user, callback) {
        return pool.query("update rank_user set rank_code=? where user_code=?", [rank_user.rank_code, user_code], callback);
    }
};
module.exports = rank_user;