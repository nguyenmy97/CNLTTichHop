var pool = require('../index'); //reference of dbconnection.js  
var feeback = {
    getAllFeeback: function(callback) {
        return pool.query("Select * from feeback", callback);
    },
    getFeebackById: function(fb_code, callback) {
        return pool.query("select * from feeback where fb_code=?", [fb_code], callback);
    },
    getFeebackBy_User_code: function(user_code, callback) {
        return pool.query("select * from feeback where user_code=?", [user_code], callback);
    },
    addFeeback: function(feeback, callback) {
        return pool.query("Insert into feeback values(?,?,?)", [feeback.fb_code, feeback.fb_content, feeback.user_code], callback);
    },
    deleteFeeback: function(fb_code, callback) {
        return pool.query("delete from feeback where fb_code=?", [fb_code], callback);
    },
    updateFeeback: function(fb_code, feeback, callback) {
        return pool.query("update feeback set fb_content=? where fb_code=?", [feeback.fb_content, fb_code], callback);
    }
};
module.exports = feeback;