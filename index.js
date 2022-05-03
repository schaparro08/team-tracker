const {prompt} = require('inquirer');
const db = require('./db');
require('console.table');

//Inquirer here

function mainMenu() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View ALL Employees',
                    value: 'VIEW_EMPLOYEES'
                },
                // view employees
                //view departments
                //view roles
                //add employee
                // add department
                //update an employee role
                {
                    name: 'Quit',
                    value: 'QUIT'
                }
            ]
        }
    ]).then(res => {
        let choices = res.choices;
        //NOW WE CALL THE APPROPRIATE FUNCTION DEPENDING ON WHAT THE USER CHOOSES
        // HOW WOULD YOU ORGANIZE THIS
        // if conditional
        // switch case

    })
}

// Conditional statment here - call corresponding function

// async function() {
    //let employees = await db.findAllEmployees();
    //console.table(employees);
//}

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log('\n');
        console.table(employees)
    })
    .then(() => mainMenu());
}

function quit() {
    console.log("Goodbye!");
    process.exit();
}