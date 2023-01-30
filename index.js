const inquirer = require('inquirer')
const generateFile = require('./generateFile')
const fs = require('fs')

//constructor classes/questions for each class
const {Manager, managerQuestionsArr} = require('./roles/Manager');
const { Intern, internQuestionsArr } = require('./roles/Intern');
const { Engineer, engineerQuestionsArr } = require('./roles/Enginner');

//Array to store all of the team members
const employeeArr = [];

const addManager = () => {
    return inquirer.prompt(managerQuestionsArr)
    .then(managerAnswer => {
        const {name, id, email, officeNumber } = managerAnswer;
        const manager = new Manager (name, id, email, officeNumber);

        employeeArr.push(manager);
        console.log(manager);
    })
};

const addEngineer = () => {
    return inquirer.prompt(engineerQuestionsArr)
    .then(engineerAnswer => {
        const {name, id, email, officeNumber } = engineerAnswer;
        const engineer = new Engineer (name, id, email, officeNumber);

        employeeArr.push(engineer);
        console.log(engineer);
    })
}

const addIntern = () => {
    return inquirer.prompt(internQuestionsArr)
    .then(internAnswer => {
        const {name, id, email, officeNumber } = internAnswer;
        const intern = new Intern (name, id, email, officeNumber);

        employeeArr.push(intern);
        console.log(intern);
    })
}

const addEmployee = () => {
    return inquirer.prompt(
        [
        {
            type: 'input',
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
            addEngineer;
            generateFile();
        };
        if(selection.employeeClass === 'addManager') {
            addManager;
            generateFile();
        };
        if(selection.employeeClass === 'addIntern') {
            addIntern;
            generateFile();
        }
    })
};

init(addEmployee);