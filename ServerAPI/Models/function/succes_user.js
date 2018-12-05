var pool = require('../index'); //reference of dbconnection.js  
var succes_user = {
    getAllSucces_user: function(callback) {
        return pool.query("Select * from succes_user", callback);
    },
    getSucces_userById: function(sce_user_code, callback) {
        return pool.query("select * from succes_user where sce_user_code=?", [sce_user_code], callback);
    },
    getSucces_userBy_User_code: function(user_code, callback) {
        return pool.query("select * from succes_user where user_code=?", [user_code], callback);
    },
    addSucces_user: function(succes_user, callback) {
        return pool.query("Insert into succes_user values(?,?,?,?,?,?)", [succes_user.sce_user_code, succes_user.user_code, succes_user.tp_code, succes_user.qs_code, succes_user.asw_code, succes_user.sce_user_boolean], callback);
    },
    deleteSucces_user: function(sce_user_code, callback) {
        return pool.query("delete from succes_user where sce_user_code=?", [sce_user_code], callback);
    },
    updateSucces_user: function(sce_user_code, succes_user, callback) {
        return pool.query("update succes_user set asw_code=?, ace_user_code_boolean=? where sce_user_code=?", [succes_user.asw_code, succes_user.sce_user_boolean, sce_user_code], callback);
    }
};
module.exports = succes_user;