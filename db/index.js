// Individual functions that inset sql commands
// remove employee, update employee, etc.
const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findEmployee() {
        return this.connection.promise().query(
            'SELECT employee.first_name, employee.last_name, employee.role_id, employee.salary FROM employee;'
            // figuer out which functions are needed all within class db
        )
    }
    findDepartment() {
        return this.connection.promise().query(
            'SELECT department.name, department.id FROM department;'
        )
    }
    findRoles() {
        return this.connection.promise().query(
            'SELECT role.title, role.id, role.salary, role.department_id FROM role;'
        )
    }
}




module.exports = new DB(connection);