const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Border41!',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

connection.connect(err => {
    if (err) throw err;
    init();
});
// Picking a choice of what they want to see 
const init = () => {
    inquirer.prompt({
        name: 'intro',
        type: 'list',
        message: 'hello! how would you like to start today?',
        choices: [
            'view all roles',
            'view all employees',
            'view all departments',
            'add an employee',
            'add an role',
            'add an department',
            'update a employee role',
            'EXIT',
        ],    
    })
    .then((response) =>{
        switch(response.choices){
            case 'view all roles':
                viewAllRoles();
                break;
            case 'view all employees':
                viewAllEmployees();
                break;
            case 'view all departments':
                viewAllDepartments();
                break;
            case 'add an employees':
                addEmployees();
                break;
            case 'add an roles':
                addRoles();
                break;
            case 'add an department':
                addDepartment();
                break;
            case ' update employee role':
                updateEmployees();
                break;    
            case 'EXIT':
                connection.end();
                break;
            default:
                connection.end();                     
        }
    });
};

// functions for the choices

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        init
    });
};

const viewAllEmployees = () => {
    db.query('SELECT * FROM employees', function (err, res) {
        if (err) throw err;
        console.table(res);
        init
    });
};

const viewAllRoles = () => {
    db.query('SELECT * FROM roles', function (err,res) {
        if (err) throw err;
        console.table(res);
        init
    });
};

//funciton to add to departments 

const addDepartment = () => {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'what department do you want to add to?',
        },
    ])
    .then(res => {
        db.query('INSERT INTO DEPARTMENT VALUES?',
        [answer.department],
        (err, response) => {
            if (err) {
                console.log(err);
            }else{
                console.log('department was successfully added!');
                init();
            };
          }
        )
    })
}

//function to add to employees

const addEmployees = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'firstname',
            message: 'employees first name'
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'employees last name'
        },
        {
            type: 'input',
            name: 'roles',
            message: 'title for employee',
        },
        {
            type: 'input',
            name: 'manager',
            message: 'enter manager name'
        }
    ]).then(answer =>{
        db.query('insert into employee values ?', 
            [answer.firstname, answer.lastname, answer.roles, answer.manager],
            function (err, res){
                if (err) throw err;
                console.log ('successfully added employee');
                init();
            } 
        );
    });
};

// function to add roles 
const addRoles = () => {
    inquirer.prompt([
        {
            type: 'input', 
            name: 'role',
            message: 'enter job role'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'enter roles salary'
        },
        {
            type: 'input',
            name: 'department',
            message: 'what department are they in'
        },
    ]).then(answer => {
        db.query('insert into role values ?' ,
        [answer.role, answer.salary, answer.department],
        function (err, res){
        if (err) throw err;
        console.log('role was successfully added');
        init();
        }
        );
    });
};

//function to updated employees
const updateEmployees = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newroles',
            message: 'enter updated job role'
        },
        {
            type: 'input',
            name: 'employee',
            message: 'enter employee names'
        },
    ]).then(answer => {
        db.query('UPDATE employee SET role=(?) WHERE id = (?)', [newrole, employee],
        (err,res) => {
            if (err){
                console.log(err)
            }else{
                console.log('successfully updated employee');
                init();
            }
        });
    });
};
