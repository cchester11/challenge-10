const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, email, id) 
    this.school = school
  }
  getSchool() {
    return `Interns school: ${this.school}`
  }
  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;