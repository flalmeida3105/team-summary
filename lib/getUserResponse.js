const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const GenerateSite = require("./GenerateSite");

const userChoice = {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'Generate Website'],
};

class InitializeQuestions extends (Engineer, Manager, Intern, GenerateSite) {
    constructor(engineerRole = new Engineer(), managerRole = new Manager(), internRole = new Intern()) {
        super();
        this.engRole = engineerRole.getRole();
        this.manRole = managerRole.getRole();
        this.intRole = internRole.getRole();
        // this.genSite = generateSite.writeFile();
        this.employees = [];
    };
    getUserResponse() {
        inquirer.prompt(userChoice).then((answer) => {
            if (answer.choice === "Add Manager") {
                inquirer.prompt([
                    {
                    type: 'text',
                    name: 'name',
                    message: 'What is team member\'s name?'
                    },
                    {
                        type: 'number',
                        name: 'id',
                        message: 'What is team member\'s ID?'
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: 'What is team member\'s email?'
                    },
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'What is the Manager office\'s number?',
                    },
                    {
                        type: 'confirm',
                        name: 'role',
                        message: 'Do you confirm the addition of a new Manager?',
                        default: true
                    },
                ])
                .then((answer) => {
                    const role = this.manRole;
                    const {name, id, email, officeNumber} = answer;
                    const manager = new Manager(name, id, email, officeNumber, role)
                    this.employees.push(manager)
                    console.log(this.employees)
                    this.getUserResponse();
                })
            } else if (answer.choice === "Add Engineer") {
                inquirer.prompt([
                    {
                        type: 'text',
                        name: 'name',
                        message: 'What is team member\'s name?'
                    },
                    {
                        type: 'number',
                        name: 'id',
                        message: 'What is team member\'s ID?'
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: 'What is team member\'s email?'
                    },
                    {
                        type: 'text',
                        name: 'github',
                        message: 'What is team member\'s GitHub username?'
                    },
                    {
                        type: 'confirm',
                        name: 'role',
                        message: 'Do you confirm the addition of a new Engineer?',
                        default: true
                    },
                ])
                .then((answer) => {
                    const role = this.engRole;
                    const { name, id, email, github } = answer;
                    const engineer = new Engineer(name, id, email, github, role)
                    this.employees.push(engineer)
                    console.log(this.employees)
                    this.getUserResponse();
                })
            } else if (answer.choice === "Add Intern") {
                inquirer.prompt ([
                    {
                        type: 'text',
                        name: 'name',
                        message: 'What is team member\'s name?'
                    },
                    {
                        type: 'number',
                        name: 'id',
                        message: 'What is team member\'s ID?'
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: 'What is team member\'s email?'
                    },
                    {
                        type: 'text',
                        name: 'school',
                        message: 'What is team member school\'s name?'
                    },
                    {
                        type: 'confirm',
                        name: 'role',
                        message: 'Do you confirm the addition of a new Intern?',
                        default: true
                    },
                ])
                .then((answer) => {
                    const role = this.intRole;
                    const { name, id, email, school } = answer;
                    const intern = new Intern(name, id, email, school, role)
                    this.employees.push(intern)
                    console.log(this.employees)
                    this.getUserResponse();
                })
            } else { //Generates HTML files
                console.log("HTML to be created.");
                new GenerateSite(this.employees).generateHtmlFile();


            }
        })
    }
}

module.exports = InitializeQuestions;