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
        this.employees = [];
    };
    getUserResponse() {
        inquirer.prompt(userChoice).then((answer) => {
            if (answer.choice === "Add Manager") {
                inquirer.prompt([
                    {
                        type: 'text',
                        name: 'name',
                        message: 'What is team member\'s name?',
                        validate: (nameInput) => {
                            if (nameInput !== '' && isNaN(nameInput)) {
                                return true;
                            } else {
                                return 'Please add a valid name!';
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is team member\'s ID?',
                        validate: (idInput) => {
                            if (isNaN(idInput) || idInput === '') {
                                return 'Please enter a number!';
                            } else {
                                return true;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: 'What is team member\'s email?',
                        validate: (emailInput) => {
                            if (emailInput !== '' && emailInput.includes("@") ) {
                                return true;
                            } else {
                                return 'Please enter a valid email!';

                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'What is the Manager office\'s number?',
                        validate: (officeNumberInput) => {
                            if (isNaN(officeNumberInput) || officeNumberInput === '') {
                                return 'Please enter a number!';
                            } else {
                                return true;
                            }
                        }
                    },
                ])
                .then((answer) => {
                    console.log('\x1b[93m%s\x1b[0m',"\n>>>>>>>>>> A new Manager has been added! <<<<<<<<<<<\n");
                    const role = this.manRole;
                    const {name, id, email, officeNumber} = answer;
                    const manager = new Manager(name, id, email, officeNumber, role)
                    this.employees.push(manager)
                    // console.log(this.employees)
                    this.getUserResponse();
                })
            } else if (answer.choice === "Add Engineer") {
                inquirer.prompt([
                    {
                        type: 'text',
                        name: 'name',
                        message: 'What is team member\'s name?',
                        validate: (nameInput) => {
                            if (nameInput !== '' && isNaN(nameInput)) {
                                return true;
                            } else {
                                return 'Please add a valid name!';
                            }
                        } 
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is team member\'s ID?',
                        validate: (idInput) => {
                            if (isNaN(idInput) || idInput === '') {
                                return 'Please enter a number!';
                            } else {
                                return true;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: 'What is team member\'s email?',
                        validate: (emailInput) => {
                            if (emailInput !== '' && emailInput.includes("@")) {
                                return true;
                            } else {
                                return 'Please enter a valid email!';

                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'github',
                        message: 'What is team member\'s GitHub username?',
                        validate: (githubInput) => {
                            if (githubInput === '') {
                                return 'Please enter a valid github username!';
                            } else {
                                return true;
                            }
                        }
                    },
                ])
                .then((answer) => {
                    console.log('\x1b[93m%s\x1b[0m',"\n>>>>>>>>>> A new Engineer has been added! <<<<<<<<<<<\n");
                    const role = this.engRole;
                    const { name, id, email, github } = answer;
                    const engineer = new Engineer(name, id, email, github, role)
                    this.employees.push(engineer)
                    // console.log(this.employees)
                    this.getUserResponse();
                })
            } else if (answer.choice === "Add Intern") {
                inquirer.prompt ([
                    {
                        type: 'text',
                        name: 'name',
                        message: 'What is team member\'s name?',
                        validate: (nameInput) => {
                            if (nameInput !== '' && isNaN(nameInput)) {
                                return true;
                            } else {
                                return 'Please add a valid name!';
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is team member\'s ID?',
                        validate: (idInput) => {
                            if (isNaN(idInput) || idInput === '') {
                                return 'Please enter a number!';
                            } else {
                                return true;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: 'What is team member\'s email?',
                        validate: (emailInput) => {
                            if (emailInput !== '' && emailInput.includes("@")) {
                                return true;
                            } else {
                                return 'Please enter a valid email!';

                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'school',
                        message: 'What is team member school\'s name?',
                        validate: (schoolInput) => {
                            if (schoolInput === '') {
                                return 'Please enter a valid school\'s name!';
                            } else {
                                return true;
                            }
                        }
                    },
                ])
                .then((answer) => {
                    console.log('\x1b[93m%s\x1b[0m',"\n>>>>>>>>>> A new Intern has been added! <<<<<<<<<<<\n");
                    const role = this.intRole;
                    const { name, id, email, school } = answer;
                    const intern = new Intern(name, id, email, school, role)
                    this.employees.push(intern)
                    // console.log(this.employees)
                    this.getUserResponse();
                })
            } else { //Generates HTML files
                console.log('\x1b[93m%s\x1b[0m','\n>>>>>>>>>> Generating the HTML file..... <<<<<<<<<< \n');
                new GenerateSite(this.employees).generateHtmlFile();
            }
        })
    }
}

module.exports = InitializeQuestions;