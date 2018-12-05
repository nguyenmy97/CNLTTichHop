var pool = require('../index'); //reference of dbconnection.js  
var account = {
    getAllAccount: function(callback) {
        return pool.query("Select * from account", callback);
    },
    getAccountById: function(acc_code, callback) {
        return pool.query("select * from account where acc_code=?", [acc_code], callback);
    },
    addAccount: function(account, callback) {
        return pool.query("Insert into account values(?,?,?,?,?,?,?)", [account.acc_code, account.acc_username, account.acc_password, account.acc_type,
            account.acc_datecreate, account.user_code, account.ep_code
        ], callback);
    },
    deleteAccount: function(acc_code, callback) {
        return pool.query("delete from account where acc_code=?", [acc_code], callback);
    },
    updateAccount: function(acc_code, account, callback) {
        return pool.query("update account set acc_password=?, acc_type=? where acc_code=?", [account.acc_password, account.acc_type, acc_code], callback);
    }
};
module.exports = account;