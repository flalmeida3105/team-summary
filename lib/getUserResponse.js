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

class EngineerRole extends Engineer {
            engineers = [];

    constructor(){
        super();
    }

    getEngResponse() {
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
                // const role = engineerRole;
                // console.log(role)
                const engineerRole = this.getRole();
                console.log(engineerRole);
                const { name, id, email, github } = answer;
                const engineer = new Engineer(name, id, email, github, engineerRole)
                this.engineers.push(engineer)
                console.log(this.engineers)
                new InitializeQuestions().getUserResponse();
            })
    }
}

class InitializeQuestions {
    constructor(engineerRole = new EngineerRole() ) {
        this.engineerRole = engineerRole;
        this.managers = [];
        // this.engineers = [];
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
                    const role = "Manager";
                    const {name, id, email, officeNumber} = answer;
                    const manager = new Manager(name, id, email, officeNumber, role)
                    this.managers.push(manager)
                    console.log(this.managers)
                    this.getUserResponse();
                })
            } else if (answer.choice === "Add Engineer") {
                this.engineerRole.getEngResponse();
                // inquirer.prompt([
                //     {
                //         type: 'text',
                //         name: 'name',
                //         message: 'What is team member\'s name?'
                //     },
                //     {
                //         type: 'number',
                //         name: 'id',
                //         message: 'What is team member\'s ID?'
                //     },
                //     {
                //         type: 'text',
                //         name: 'email',
                //         message: 'What is team member\'s email?'
                //     },
                //     {
                //         type: 'text',
                //         name: 'github',
                //         message: 'What is team member\'s GitHub username?'
                //     },
                //     {
                //         type: 'confirm',
                //         name: 'role',
                //         message: 'Do you confirm the addition of a new Engineer?',
                //         default: `${answer.choice}`
                //     },
                // ])
                // .then((answer) => {
                //     // const role = engineerRole;
                //     // console.log(role)
                //     const { name, id, email, github } = answer;
                //     const engineer = new Engineer(name, id, email, github)
                //     this.engineers.push(engineer)
                //     console.log(this.engineers)
                //     this.getUserResponse();
                // })
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
                    const role = "Intern";
                    const { name, id, email, school } = answer;
                    const intern = new Intern(name, id, email, school, role)
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