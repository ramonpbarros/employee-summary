const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const fsWriteFile = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeesArray = [];

function start() {
    console.log("Please build your team:")
    addManager();
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your manager\'s name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your manager\'s id?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your manager\'s email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your manager\'s office number?'
        }
    ])
        .then(answers => {
            let managerName = answers.managerName;
            let managerId = answers.managerId;
            let managerEmail = answers.managerEmail;
            let managerOfficeNumber = answers.managerOfficeNumber;

            const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
            employeesArray.push(manager);

            newMember();
        })
        .catch(error => {
            throw error;
        })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your engineer\'s name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your engineer\'s id?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineer\'s email?'
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'What is your engineer\'s GitHub username?'
        }
    ]).then(answers => {
        let engineerName = answers.engineerName;
        let engineerId = answers.engineerId;
        let engineerEmail = answers.engineerEmail;
        let engineerGitHub = answers.engineerGitHub;

        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub);
        employeesArray.push(engineer);

        newMember();
    })
        .catch(error => {
            throw error;
        })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your intern\'s name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your intern\'s id?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your intern\'s email?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is your intern\'s school?'
        }
    ]).then(answers => {
        let internName = answers.internName;
        let internId = answers.internId;
        let internEmail = answers.internEmail;
        let internSchool = answers.internSchool;

        const intern = new Intern(internName, internId, internEmail, internSchool);
        employeesArray.push(intern);

        newMember();
    })
        .catch(error => {
            throw error;
        })
}

function newMember() {
    inquirer.prompt({
        type: 'list',
        name: 'addNewMember',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members']
    })
        .then(answers => {
            let addNewMember = answers.addNewMember;
            if (addNewMember === 'Engineer') {
                addEngineer();
            }
            if (addNewMember === 'Intern') {
                addIntern();
            }
            if (addNewMember === 'I don\'t want to add any more team members') {
                writeFile();
            }
        })
        .catch(error => {
            throw error;
        })
}

function writeFile() {
    fsWriteFile(outputPath, render(employeesArray))
        .then(() => {
            console.log("Done writting file!")
        })
        .catch(error => {
            throw error;
        })
}

start();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
