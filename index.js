const { prompt } = require("inquirer");
const { findDepartment } = require("./db");
const db = require("./db");
require("console.table");

//Inquirer here

function mainMenu() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View ALL Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View ALL Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View ALL roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add new employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Add new role",
          value: "ADD_ROLE",
        },
        {
          name: "Add new department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Update employee role",
          value: "UPDATE_ROLE",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]).then((res) => {
    let answer = res.choice;
    console.log(answer);
    //NOW WE CALL THE APPROPRIATE FUNCTION DEPENDING ON WHAT THE USER CHOOSES
    if (answer === "VIEW_EMPLOYEES") {
      // console.log('Hello There');
      viewEmployees();
    } else if (answer === "VIEW_DEPARTMENTS") {
      viewDepartments();
    } else if (answer === "VIEW_ROLES") {
      viewRoles();
    } else if (answer === "ADD_EMPLOYEE") {
      makeEmployee();
    }

    // if conditional
    // switch case
  });
}

// Conditional statment here - call corresponding function

// async function() {
//let employees = await db.findAllEmployees();
//console.table(employees);
//}

function viewEmployees() {
  db.findEmployee()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => mainMenu());
}

function viewDepartments() {
  db.findDepartment()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => mainMenu());
}

function viewRoles() {
  db.findRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => mainMenu());
}

function makeEmployee() {
  db.findRoles() // go into inquirer here
    //   console.log(roles);
      prompt([
        {
          type: "input",
          name: "firstName",
          message: "What is the employees first name?",
        },
        {
          type: "input",
          name: "lastName",
          message: "What is the employees last name?",
        }])
        .then(res =>{
        db.findEmployee() 
        .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({title, id}) => ({
                name: title,
                value: id
            }));

     prompt([
        {
          type: "list",
          name: "roleId",
          message: "What is the employees role?",
          choices: roleChoices,
        }
      ])
        .then((res) => {
          let roleId = res.roleId;
          console.log(roleId);
        })
        .then(res => {
            let employee = {
                first_name: firstName,
                last_name: lastName,
                role_id: id

            }
            db.addNewEmployee(employee);
        })
        .then(() => mainMenu());
    });
})
}

function quit() {
  console.log("Goodbye!");
  process.exit();
}

const init = () => {
  mainMenu();
};

init();
