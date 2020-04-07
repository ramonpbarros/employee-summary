// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern {
    constructor (name, id, email, school) {
        this.school = school;
    }

    getRole() {
        const value = "Intern";
        return value;
    }

    getSchool () {
        return this.school;
    }
}

module.exports = Intern;