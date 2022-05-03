// Individual functions that inset sql commands
// remove employee, update employee, etc.
const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findEmployee() {
        return this.connection.promise().query(
            'SELECT employee.first_name, employee.last_name, employee.role_id FROM employee;'
            // figuer out which functions are needed all within class db
        )
    }
    findDepartment() {
        return this.connection.promise().query(
            'SELECT department.name, department.id FROM department;'
        )
    }
}




module.exports = new DB(connection);