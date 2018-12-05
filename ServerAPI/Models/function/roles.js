var pool = require('../index'); //reference of dbconnection.js  
var roles = {
    getAllRoles: function(callback) {
        return pool.query("Select * from roles", callback);
    },
    getrolesBy_role_code: function(role_code, callback) {
        return pool.query("select * from roles where role_code=?", [role_code], callback);
    },
    addRoles: function(roles, callback) {
        return pool.query("Insert into roles values(?,?)", [roles.role_code, roles.role_name], callback);
    },
    deleteRoles: function(rep_crole_codemt_code, callback) {
        return pool.query("delete from roles where role_code=?", [role_code], callback);
    },
    updateRoles: function(role_code, roles, callback) {
        return pool.query("update roles set role_name=? where role_code=?", [roles.role_name, role_code], callback);
    }
};
module.exports = roles;