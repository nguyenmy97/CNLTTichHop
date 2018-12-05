var pool = require('../index');
var User = {
    getAllUser: function(callback) {
        return pool.query("Select * from users", callback);
    },
    getUserById: function(user_code, callback) {
        return pool.query("select * from users where sb_code=?", [user_code], callback);
    },
    addUser: function(user, callback) {
        return pool.query("Insert into users values(?,?,?,?,?,?,?,?,?)", [user.user_code, user.user_name, user.user_gender,
            user.user_birthday, user.user_phone, user.user_email, user.user_address, user.user_datecreate, user.user_point
        ], callback);
    },
    deleteUser: function(user_code, callback) {
        return pool.query("delete from users where user_code=?", [user_code], callback);
    },
    updateUser: function(user_code, users, callback) {
        return pool.query("update users set user_name=?,user_gender=?, user_birthday=?,user_phone=?,user_email=?,user_address=?,user_datecreate=?, user_point=? where user_code=?", [user.user_name, user.user_gender, user.user_birthday, user.user_phone,
            user.user_email, user.user_address, user.user_datecreate, user.user_point, user_code
        ], callback);
    }
};
module.exports = User;