const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
  super(name, id, email) 
  this.officeNumber = officeNumber
  }

  getOfficeNumber() {
    return `Manager's office number: ${this.officeNumber}`
  }

  getRole() {
    return `Manager`
  }
}


module.exports = Manager;