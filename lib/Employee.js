// Parent class
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee

const inquirer = require("inquirer");

class Employee {
    constructor(name = '') {
        this.name = name;
        this.id;
        this.email;
    }

    getName() {
        inquirer 
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is team members name?'
            })
                then.console.log(`${this.name}`);
    }

    getId() {
        inquirer
            .prompt({
                type: 'number',
                name: 'id',
                message: 'What is team members ID?'
            })
    }

    getEmail() {
        inquirer
            .prompt({
                type: 'text',
                name: 'email',
                message: 'What is team members email?'
            })
    }
}

module.exports = Employee;