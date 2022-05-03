const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");

const userChoice = {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'Generate Website'],
};

class InitializeQuestions {
    constructor() {
        this.managers = [];
        this.engineers = [];
        this.interns = [];
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
                ])
                .then((answer) => {
                    const {name, id, email, officeNumber} = answer;
                    const manager = new Manager(name, id, email, officeNumber)
                    this.managers.push(manager)
                    console.log(this.managers)
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
                ])
                .then((answer) => {
                    const { name, id, email, github } = answer;
                    const engineer = new Engineer(name, id, email, github)
                    this.engineers.push(engineer)
                    console.log(this.engineers)
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
                ])
                .then((answer) => {
                    const { name, id, email, school } = answer;
                    const intern = new Intern(name, id, email, school)
                    this.interns.push(intern)
                    console.log(this.interns)
                    this.getUserResponse();
                })
            } else {
                console.log("HTML to be created.")
            }

            })
        }
    }

module.exports = InitializeQuestions;