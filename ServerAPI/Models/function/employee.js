var pool = require('../index'); //reference of dbconnection.js  
var employee = {
    getAllEmployee: function(callback) {
        return pool.query("Select * from employee", callback);
    },
    getEmployeeById: function(ep_code, callback) {
        return pool.query("select * from employee where ep_code=?", [ep_code], callback);
    },
    addEmployee: function(employee, callback) {
        return pool.query("Insert into employee values(?,?,?,?,?,?,?,?,?)", [employee.ep_code, employee.ep_name, employee.ep_birthday,
            employee.ep_gender, employee.ep_phone, employee.ep_email,
            employee.ep_address, employee.ep_position, employee.datestart
        ], callback);
    },
    deleteEmployee: function(ep_code, callback) {
        return pool.query("delete from employee where ep_code=?", [ep_code], callback);
    },
    updateEmployee: function(ep_code, employee, callback) {
        return pool.query("update employee set ep_name=?, ep_birthday=?, ep_gender=?, ep_phone=?, ep_email=?, ep_address=?, ep_position=? where ep_code=?", [employee.ep_name,
            employee.ep_birthday, employee.ep_gender, employee.ep_phone, employee.ep_email, employee.ep_email,
            employee.ep_address, employee.ep_position, ep_code
        ], callback);
    }
};
module.exports = employee;