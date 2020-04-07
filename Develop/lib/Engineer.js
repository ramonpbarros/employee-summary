// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer {
    constructor (name, id, email, github) {
        this.github = github;
    }

    getRole() {
        const value = "Engineer";
        return value;
    }

    getGithub () {
        return this.github;
    }
}

module.exports = Engineer;