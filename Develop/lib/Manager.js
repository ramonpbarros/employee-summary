// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager {
    constructor (name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        const value = "Manager";
        return value;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;