var pool = require('../index'); //reference of dbconnection.js  
var acc_role = {
    getAllAccRole: function(callback) {
        return pool.query("Select * from acc_role", callback);
    },
    getSAccRoleBy_Acc_Code: function(acc_code, callback) {
        return pool.query("select * from acc_role where acc_code=?", [acc_code], callback);
    },
    getSAccRoleBy_Role_Code: function(role_code, callback) {
        return pool.query("select * from acc_role where role_code=?", [role_code], callback);
    },
    addAccRole: function(acc_role, callback) {
        return pool.query("Insert into acc_role values(?,?)", [acc_role.acc_code, acc_role.role_code], callback);
    },
    deleteAccRole: function(acc_code, callback) {
        return pool.query("delete from acc_role where acc_code=?", [acc_code], callback);
    },
    updateAccRole: function(acc_code, role_code, callback) {
        return pool.query("update acc_role set role_code=? where acc_code=?", [acc_role.role_code, acc_code], callback);
    }
};
module.exports = acc_role;