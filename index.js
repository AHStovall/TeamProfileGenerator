const inquirer = require('inquirer')
const writeFile = require('./helpers/writeFile')

//constructor classes/questions for each class
const Manager = require('./roles/Manager');
const Intern = require('./roles/Intern');
const Engineer = require('./roles/Engineer');


//Array to store all of the team members
const employeeArr = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's Id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    
    ])
    .then((answer) => {
        answer = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);

        employeeArr.push(answer);
        console.log(answer);
        addEmployee();
    })
};

const addEngineer = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github user name?"
    }])
    .then((answer) => {
        answer = new Engineer(answer.name, answer.id, answer.email, answer.github);

        employeeArr.push(answer);
        console.log(answer);
        addEmployee();
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's Id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        }
    
    ])
    .then((answer) => {
        answer = new Intern(answer.name, answer.id, answer.email, answer.school);

        employeeArr.push(answer);
        console.log(answer);
        addEmployee();
    })
}

const addEmployee = () => {
    return inquirer.prompt(
        [
        {
            type: 'list',
            name: 'employeeClass',
            message: "What type of team member are you adding?",
            choices: [
                {name: 'Engineer', value: 'addEngineer'},
                {name: 'Manager', value: 'addManager'},
                {name: 'Intern', value: 'addIntern'},
                {name: 'End', value: 'end'}
            ]
        }
    ]).then( selection => {
        if(selection.employeeClass === 'addEngineer') {
            addEngineer();
        };
        if(selection.employeeClass === 'addManager') {
            addManager();
        };
        if(selection.employeeClass === 'addIntern') {
            addIntern();
        };
        if(selection.employeeClass === 'end') {
            const html = templateFile(employeeArr)
            writeFile(html);
        }
    })
};

generateFile()

function init() {
    addEmployee();
}

init();