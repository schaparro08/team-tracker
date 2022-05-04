// Individual functions that inset sql commands
// remove employee, update employee, etc.
const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findEmployee() {
        return this.connection.promise().query(
            'SELECT * FROM employee;'
            // figuer out which functions are needed all within class db
        )
    }
    findDepartment() {
        return this.connection.promise().query(
            'SELECT * FROM department;'
        )
    }
    findRoles() {
        return this.connection.promise().query(
            'SELECT * FROM role;'
        )
    }
    addNewEmployee(firstName, lastName, roleId) {
        return this.connection.promise().query(
            'INSERT INTO employee(first_name, last_name, role_id) VALUES(firstName, lastName, roleId);'
        )
    }
}




module.exports = new DB(connection);